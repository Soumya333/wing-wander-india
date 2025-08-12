// Input sanitization utilities for enhanced security
export const sanitizeUserInput = (input: string): string => {
  if (!input || typeof input !== 'string') return '';
  
  // Remove potentially harmful characters and patterns
  return input
    .trim()
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove script tags
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+\s*=/gi, '') // Remove event handlers
    .replace(/data:/gi, '') // Remove data URLs
    .replace(/vbscript:/gi, '') // Remove vbscript
    .replace(/[\x00-\x1F\x7F]/g, '') // Remove control characters
    .slice(0, 1000); // Limit length to prevent DoS
};

export const validatePhotoUrl = (url: string): boolean => {
  if (!url || typeof url !== 'string') return false;
  
  try {
    const urlObj = new URL(url);
    
    // Only allow HTTPS for security
    if (urlObj.protocol !== 'https:') return false;
    
    // Allow only trusted domains for photos
    const allowedDomains = [
      'images.unsplash.com',
      'source.unsplash.com',
      'picsum.photos',
      'via.placeholder.com',
      'placehold.co',
      'cdn.pixabay.com',
      'images.pexels.com'
    ];
    
    const domain = urlObj.hostname.toLowerCase();
    const isAllowedDomain = allowedDomains.some(allowedDomain => 
      domain === allowedDomain || domain.endsWith('.' + allowedDomain)
    );
    
    if (!isAllowedDomain) return false;
    
    // Check for valid image file extensions
    const validExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
    const pathname = urlObj.pathname.toLowerCase();
    const hasValidExtension = validExtensions.some(ext => pathname.includes(ext));
    
    // Allow URLs without extensions if from trusted photo services
    const isTrustedPhotoService = domain.includes('unsplash') || 
                                  domain.includes('picsum') || 
                                  domain.includes('placeholder');
    
    return hasValidExtension || isTrustedPhotoService;
  } catch {
    return false;
  }
};

// Rate limiting utility for preventing spam
class RateLimiter {
  private attempts: Map<string, number[]> = new Map();
  private readonly maxAttempts: number;
  private readonly windowMs: number;

  constructor(maxAttempts: number = 10, windowMs: number = 60000) {
    this.maxAttempts = maxAttempts;
    this.windowMs = windowMs;
  }

  isAllowed(identifier: string): boolean {
    const now = Date.now();
    const userAttempts = this.attempts.get(identifier) || [];
    
    // Remove old attempts outside the window
    const recentAttempts = userAttempts.filter(attempt => now - attempt < this.windowMs);
    
    if (recentAttempts.length >= this.maxAttempts) {
      return false;
    }
    
    // Add current attempt
    recentAttempts.push(now);
    this.attempts.set(identifier, recentAttempts);
    
    return true;
  }

  reset(identifier: string): void {
    this.attempts.delete(identifier);
  }
}

export const chatRateLimiter = new RateLimiter(20, 60000); // 20 messages per minute
export const formRateLimiter = new RateLimiter(5, 300000); // 5 form submissions per 5 minutes
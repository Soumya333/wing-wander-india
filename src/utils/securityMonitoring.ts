// Security monitoring and logging utilities
interface SecurityEvent {
  type: 'auth_failure' | 'rate_limit_exceeded' | 'suspicious_input' | 'invalid_url' | 'form_error';
  userId?: string;
  userAgent?: string;
  ip?: string;
  details: string;
  timestamp: Date;
  severity: 'low' | 'medium' | 'high';
}

class SecurityMonitor {
  private events: SecurityEvent[] = [];
  private readonly maxEvents = 1000; // Keep last 1000 events in memory

  logEvent(event: Omit<SecurityEvent, 'timestamp'>): void {
    const securityEvent: SecurityEvent = {
      ...event,
      timestamp: new Date(),
      userAgent: navigator.userAgent,
    };

    this.events.unshift(securityEvent);
    
    // Keep only the most recent events
    if (this.events.length > this.maxEvents) {
      this.events = this.events.slice(0, this.maxEvents);
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.warn('Security Event:', securityEvent);
    }

    // In production, you would send this to your logging service
    // this.sendToLogService(securityEvent);
  }

  getRecentEvents(hours: number = 24): SecurityEvent[] {
    const cutoff = new Date(Date.now() - hours * 60 * 60 * 1000);
    return this.events.filter(event => event.timestamp > cutoff);
  }

  getEventsByType(type: SecurityEvent['type'], hours: number = 24): SecurityEvent[] {
    return this.getRecentEvents(hours).filter(event => event.type === type);
  }

  getHighSeverityEvents(hours: number = 24): SecurityEvent[] {
    return this.getRecentEvents(hours).filter(event => event.severity === 'high');
  }

  // Check for suspicious patterns
  detectSuspiciousActivity(userId?: string): boolean {
    const recentEvents = this.getRecentEvents(1); // Last hour
    
    // Check for rapid-fire authentication failures
    const authFailures = recentEvents.filter(e => e.type === 'auth_failure').length;
    if (authFailures > 5) {
      this.logEvent({
        type: 'suspicious_input',
        userId,
        details: `Multiple authentication failures detected: ${authFailures} in the last hour`,
        severity: 'high'
      });
      return true;
    }

    // Check for repeated rate limiting
    const rateLimitEvents = recentEvents.filter(e => e.type === 'rate_limit_exceeded').length;
    if (rateLimitEvents > 3) {
      this.logEvent({
        type: 'suspicious_input',
        userId,
        details: `Repeated rate limit violations: ${rateLimitEvents} in the last hour`,
        severity: 'medium'
      });
      return true;
    }

    return false;
  }

  // Get security summary for dashboard
  getSecuritySummary(hours: number = 24): {
    totalEvents: number;
    authFailures: number;
    rateLimitExceeded: number;
    suspiciousInputs: number;
    highSeverityEvents: number;
  } {
    const events = this.getRecentEvents(hours);
    
    return {
      totalEvents: events.length,
      authFailures: events.filter(e => e.type === 'auth_failure').length,
      rateLimitExceeded: events.filter(e => e.type === 'rate_limit_exceeded').length,
      suspiciousInputs: events.filter(e => e.type === 'suspicious_input').length,
      highSeverityEvents: events.filter(e => e.severity === 'high').length,
    };
  }
}

export const securityMonitor = new SecurityMonitor();

// Helper functions for common security logging
export const logAuthFailure = (userId?: string, details: string = 'Authentication failed') => {
  securityMonitor.logEvent({
    type: 'auth_failure',
    userId,
    details,
    severity: 'medium'
  });
};

export const logRateLimitExceeded = (userId?: string, operation: string = 'unknown') => {
  securityMonitor.logEvent({
    type: 'rate_limit_exceeded',
    userId,
    details: `Rate limit exceeded for operation: ${operation}`,
    severity: 'medium'
  });
};

export const logSuspiciousInput = (input: string, reason: string, userId?: string) => {
  securityMonitor.logEvent({
    type: 'suspicious_input',
    userId,
    details: `Suspicious input detected: ${reason}. Input: ${input.slice(0, 100)}...`,
    severity: 'high'
  });
};

export const logInvalidUrl = (url: string, userId?: string) => {
  securityMonitor.logEvent({
    type: 'invalid_url',
    userId,
    details: `Invalid or potentially malicious URL submitted: ${url}`,
    severity: 'medium'
  });
};

export const logFormError = (formType: string, error: string, userId?: string) => {
  securityMonitor.logEvent({
    type: 'form_error',
    userId,
    details: `Form validation error in ${formType}: ${error}`,
    severity: 'low'
  });
};

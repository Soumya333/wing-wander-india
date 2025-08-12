import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, AlertTriangle, Activity, Users } from 'lucide-react';
import { securityMonitor } from '@/utils/securityMonitoring';
import { useAuth } from '@/components/auth/AuthProvider';

const SecurityDashboard = () => {
  const { user } = useAuth();
  const [securitySummary, setSecuritySummary] = useState({
    totalEvents: 0,
    authFailures: 0,
    rateLimitExceeded: 0,
    suspiciousInputs: 0,
    highSeverityEvents: 0,
  });

  useEffect(() => {
    const updateSummary = () => {
      setSecuritySummary(securityMonitor.getSecuritySummary(24));
    };

    updateSummary();
    const interval = setInterval(updateSummary, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  // Only show to authenticated users (could add admin role check here)
  if (!user) return null;

  const getStatusColor = (count: number, threshold: number) => {
    if (count === 0) return 'secondary';
    if (count < threshold) return 'outline';
    return 'destructive';
  };

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-2 mb-6">
        <Shield className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-bold">Security Dashboard</h2>
      </div>

      {securitySummary.highSeverityEvents > 0 && (
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            {securitySummary.highSeverityEvents} high-severity security events detected in the last 24 hours.
            Please review the activity below.
          </AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Events</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{securitySummary.totalEvents}</div>
            <p className="text-xs text-muted-foreground">Last 24 hours</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Auth Failures</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{securitySummary.authFailures}</div>
            <Badge variant={getStatusColor(securitySummary.authFailures, 5)} className="mt-2">
              {securitySummary.authFailures === 0 ? 'Good' : 
               securitySummary.authFailures < 5 ? 'Monitor' : 'Alert'}
            </Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rate Limits</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{securitySummary.rateLimitExceeded}</div>
            <Badge variant={getStatusColor(securitySummary.rateLimitExceeded, 3)} className="mt-2">
              {securitySummary.rateLimitExceeded === 0 ? 'Good' : 
               securitySummary.rateLimitExceeded < 3 ? 'Monitor' : 'Alert'}
            </Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Suspicious Input</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{securitySummary.suspiciousInputs}</div>
            <Badge variant={getStatusColor(securitySummary.suspiciousInputs, 2)} className="mt-2">
              {securitySummary.suspiciousInputs === 0 ? 'Good' : 
               securitySummary.suspiciousInputs < 2 ? 'Monitor' : 'Alert'}
            </Badge>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Security Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Authentication Security</span>
              <Badge variant={securitySummary.authFailures < 5 ? 'secondary' : 'destructive'}>
                {securitySummary.authFailures < 5 ? 'Secure' : 'Needs Attention'}
              </Badge>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm">Rate Limiting</span>
              <Badge variant={securitySummary.rateLimitExceeded < 3 ? 'secondary' : 'destructive'}>
                {securitySummary.rateLimitExceeded < 3 ? 'Active' : 'Under Pressure'}
              </Badge>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm">Input Validation</span>
              <Badge variant="secondary">Active</Badge>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm">Monitoring</span>
              <Badge variant="secondary">Real-time</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Security Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="text-sm space-y-2 text-muted-foreground">
            <li>• All user inputs are sanitized and validated</li>
            <li>• Rate limiting is active on forms and chat</li>
            <li>• Photo URLs are restricted to trusted domains</li>
            <li>• Authentication failures are monitored and logged</li>
            <li>• Suspicious activity patterns are automatically detected</li>
            <li>• Consider enabling MFA in Supabase dashboard for enhanced security</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default SecurityDashboard;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PublicLayout } from '../components/layout/PublicLayout';
import { GlassPanel } from '../components/ui/GlassPanel';
import { ButtonPrimary, ButtonSecondary } from '../components/ui/Buttons';

export default function AuthPage({ mode = 'login' }) {
  const navigate = useNavigate();
  const [formMode, setFormMode] = useState(mode);

  const isLogin = formMode === 'login';
  const isRegister = formMode === 'register';
  const isForgotPassword = formMode === 'forgot-password';

  return (
    <PublicLayout>
      <main className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] items-start">
          <GlassPanel className="p-8 md:p-10">
            <p className="text-primary text-label-mono uppercase tracking-[0.3em] mb-4">Authentication</p>
            <h1 className="text-display-lg-mobile md:text-[36px] text-white mb-4">
              {isLogin && 'Welcome back'}
              {isRegister && 'Create your Nexora account'}
              {isForgotPassword && 'Reset your password'}
            </h1>
            <p className="text-body-base text-on-surface-variant mb-8">
              {isLogin && 'Sign in to continue your founder journey and access your personalized workspace.'}
              {isRegister && 'Join founders, mentors, and investors in one connected startup ecosystem.'}
              {isForgotPassword && 'Enter your email to receive a secure reset link.'}
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonSecondary onClick={() => setFormMode('login')}>Login</ButtonSecondary>
              <ButtonSecondary onClick={() => setFormMode('register')}>Register</ButtonSecondary>
              <ButtonSecondary onClick={() => setFormMode('forgot-password')}>Forgot password</ButtonSecondary>
            </div>
          </GlassPanel>

          <GlassPanel className="p-8 md:p-10">
            <form className="space-y-5" onSubmit={(event) => { event.preventDefault(); navigate('/founder/dashboard'); }}>
              {!isForgotPassword && (
                <>
                  <label className="block">
                    <span className="mb-2 block text-sm text-on-surface-variant">Email</span>
                    <input type="email" className="w-full rounded-xl border border-outline-variant/30 bg-surface-variant/20 px-4 py-3 text-white focus:outline-none focus:border-primary" placeholder="you@example.com" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm text-on-surface-variant">Password</span>
                    <input type="password" className="w-full rounded-xl border border-outline-variant/30 bg-surface-variant/20 px-4 py-3 text-white focus:outline-none focus:border-primary" placeholder="••••••••" />
                  </label>
                </>
              )}
              {isRegister && (
                <label className="block">
                  <span className="mb-2 block text-sm text-on-surface-variant">Full name</span>
                  <input type="text" className="w-full rounded-xl border border-outline-variant/30 bg-surface-variant/20 px-4 py-3 text-white focus:outline-none focus:border-primary" placeholder="Alex Founder" />
                </label>
              )}
              {isForgotPassword && (
                <label className="block">
                  <span className="mb-2 block text-sm text-on-surface-variant">Email</span>
                  <input type="email" className="w-full rounded-xl border border-outline-variant/30 bg-surface-variant/20 px-4 py-3 text-white focus:outline-none focus:border-primary" placeholder="you@example.com" />
                </label>
              )}
              <ButtonPrimary className="w-full justify-center py-3" type="submit">
                {isLogin && 'Log in'}
                {isRegister && 'Create account'}
                {isForgotPassword && 'Send reset link'}
              </ButtonPrimary>
            </form>
            <div className="mt-6 text-sm text-on-surface-variant">
              {isLogin ? (
                <p>
                  New to Nexora? <Link to="/register" className="text-primary">Create an account</Link>
                </p>
              ) : (
                <p>
                  Already have an account? <Link to="/login" className="text-primary">Sign in</Link>
                </p>
              )}
            </div>
          </GlassPanel>
        </div>
      </main>
    </PublicLayout>
  );
}

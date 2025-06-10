'use client';

import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  Search, 
  Settings, 
  User, 
  Folder,
  Command,
  Moon,
  Sun,
  Monitor,
  FileText,
  ChevronDown,
  Bell,
  HelpCircle,
  LogOut,
  Palette,
  Activity,
  Wifi,
  WifiOff,
  CheckCircle,
  XCircle,
  Clock,
  RotateCcw
} from 'lucide-react';
import { useWorkspaceStore } from '@/stores/workspace';
import { SyncStatusIndicator, type SyncStatus } from '../sync/SyncStatusIndicator';
import { SettingsModal } from '@/components/modals/SettingsModal';
import { NotificationsPanel } from '@/components/modals/NotificationsPanel';
import { UserProfileModal } from '@/components/modals/UserProfileModal';

export function WorkspaceHeader() {
  const { 
    toggleSidebar, 
    currentProject, 
    theme, 
    setTheme,
    selectedModel,
    modelProvider,
    layout,
    toggleFileTree
  } = useWorkspaceStore();

  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showCommandPalette, setShowCommandPalette] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showNotificationsPanel, setShowNotificationsPanel] = useState(false);
  const [showUserProfileModal, setShowUserProfileModal] = useState(false);
  const [syncStatus, setSyncStatus] = useState<SyncStatus | null>(null);

  // Initialize sync status after hydration
  useEffect(() => {
    setSyncStatus({
      isOnline: navigator.onLine,
      isConnected: true,
      isSyncing: false,
      lastSync: new Date(),
      pendingOperations: 0,
      error: undefined,
    });

    // Listen to online/offline events
    const handleOnline = () => {
      setSyncStatus(prev => prev ? { ...prev, isOnline: true, isConnected: true, error: undefined } : null);
    };

    const handleOffline = () => {
      setSyncStatus(prev => prev ? { ...prev, isOnline: false, isConnected: false } : null);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Handle global keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setShowCommandPalette(true);
      }
      if (e.key === 'Escape') {
        setShowCommandPalette(false);
        setShowUserMenu(false);
        setShowNotificationsPanel(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleThemeToggle = () => {
    const themes: Array<'light' | 'dark' | 'system'> = ['light', 'dark', 'system'];
    const currentIndex = themes.indexOf(theme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    setTheme(nextTheme);
  };

  const handleSettingsClick = () => {
    console.log('Opening settings...');
    setShowSettingsModal(true);
    setShowUserMenu(false);
  };

  const handleNotificationsClick = () => {
    console.log('Opening notifications...');
    setShowNotificationsPanel(!showNotificationsPanel);
  };

  const handleHelpClick = () => {
    console.log('Opening help...');
    window.open('/docs', '_blank');
  };

  const handleUserProfileClick = () => {
    console.log('Opening user profile...');
    setShowUserMenu(false);
    setShowUserProfileModal(true);
  };

  const handleLogout = () => {
    console.log('Logging out...');
    setShowUserMenu(false);
    if (confirm('Are you sure you want to sign out?')) {
      // Implement logout functionality
      window.location.href = '/auth/signin';
    }
  };

  const getThemeIcon = () => {
    switch (theme) {
      case 'light': return Sun;
      case 'dark': return Moon;
      case 'system': return Monitor;
      default: return Moon;
    }
  };

  const ThemeIcon = getThemeIcon();

  return (
    <>
      <header className="h-14 bg-background/80 backdrop-blur-lg border-b border-border flex items-center px-4 gap-4 flex-shrink-0">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          {/* Menu Toggle */}
          <button
            onClick={toggleSidebar}
            className="p-2 hover:bg-accent rounded-md transition-colors"
            title="Toggle Sidebar"
          >
            <Menu className="w-4 h-4" />
          </button>

          {/* File Tree Toggle */}
          <button
            onClick={toggleFileTree}
            className={`p-2 hover:bg-accent rounded-md transition-colors ${
              layout.showFileTree ? 'bg-accent/50' : ''
            }`}
            title="Toggle File Tree"
          >
            <FileText className="w-4 h-4" />
          </button>

          {/* Logo/Brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <img 
                src="/logo.png" 
                alt="OmniPanel Logo" 
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="font-semibold text-sm hidden sm:block">OmniPanel</span>
          </div>

          {/* Project Selector */}
          <div className="flex items-center gap-2 px-3 py-1.5 bg-accent/50 rounded-md min-w-0">
            <Folder className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            <span className="text-sm truncate">
              {currentProject?.name || 'No Project'}
            </span>
          </div>
        </div>

        {/* Center Section - Search */}
        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search files, chats, or press Cmd+K"
              className="w-full pl-10 pr-16 py-2 bg-accent/30 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40"
              onFocus={() => setShowCommandPalette(true)}
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs text-muted-foreground">⌘</kbd>
              <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs text-muted-foreground">K</kbd>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          {/* Sync Status Indicator - only render after hydration */}
          {syncStatus && (
            <SyncStatusIndicator 
              status={syncStatus}
              onRetrySync={() => {
                setSyncStatus(prev => prev ? { ...prev, isSyncing: true, error: undefined } : null);
                setTimeout(() => {
                  setSyncStatus(prev => prev ? { ...prev, isSyncing: false, lastSync: new Date() } : null);
                }, 2000);
              }}
            />
          )}

          {/* Model Indicator */}
          {selectedModel && (
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-accent/50 rounded-md">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">
                {modelProvider}/{selectedModel}
              </span>
            </div>
          )}

          {/* Notifications */}
          <button
            onClick={handleNotificationsClick}
            className="p-2 hover:bg-accent rounded-md transition-colors relative"
            title="Notifications"
          >
            <Bell className="w-4 h-4" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>

          {/* Help */}
          <button
            onClick={handleHelpClick}
            className="p-2 hover:bg-accent rounded-md transition-colors"
            title="Help & Documentation"
          >
            <HelpCircle className="w-4 h-4" />
          </button>

          {/* Command Palette */}
          <button
            onClick={() => setShowCommandPalette(true)}
            className="p-2 hover:bg-accent rounded-md transition-colors"
            title="Command Palette (Cmd+K)"
          >
            <Command className="w-4 h-4" />
          </button>

          {/* Theme Toggle */}
          <button
            onClick={handleThemeToggle}
            className="p-2 hover:bg-accent rounded-md transition-colors"
            title={`Switch to ${theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'} theme`}
          >
            <ThemeIcon className="w-4 h-4" />
          </button>

          {/* Settings */}
          <button
            onClick={handleSettingsClick}
            className="p-2 hover:bg-accent rounded-md transition-colors"
            title="Settings"
          >
            <Settings className="w-4 h-4" />
          </button>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="p-1 hover:bg-accent rounded-full transition-colors"
              title="User Menu"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-medium">U</span>
              </div>
            </button>

            {/* User Menu Dropdown */}
            {showUserMenu && (
              <div className="absolute right-0 top-full mt-2 w-56 bg-popover border border-border rounded-md shadow-lg z-50">
                <div className="flex items-center gap-2 p-3 border-b border-border">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-medium">U</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">Demo User</span>
                    <span className="text-xs text-muted-foreground">demo@omnipanel.app</span>
                  </div>
                </div>
                
                <div className="p-1">
                  <button
                    onClick={handleUserProfileClick}
                    className="w-full flex items-center gap-2 px-2 py-2 text-sm hover:bg-accent rounded-sm"
                  >
                    <User className="w-4 h-4" />
                    Profile
                  </button>
                  <button
                    onClick={handleSettingsClick}
                    className="w-full flex items-center gap-2 px-2 py-2 text-sm hover:bg-accent rounded-sm"
                  >
                    <Settings className="w-4 h-4" />
                    Settings
                  </button>
                  <button
                    onClick={handleThemeToggle}
                    className="w-full flex items-center gap-2 px-2 py-2 text-sm hover:bg-accent rounded-sm"
                  >
                    <Palette className="w-4 h-4" />
                    Themes
                  </button>
                  <div className="border-t border-border my-1" />
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2 px-2 py-2 text-sm hover:bg-accent rounded-sm text-red-600"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Settings Modal */}
      <SettingsModal 
        isOpen={showSettingsModal} 
        onClose={() => setShowSettingsModal(false)} 
      />

      {/* Notifications Panel */}
      <NotificationsPanel 
        isOpen={showNotificationsPanel} 
        onClose={() => setShowNotificationsPanel(false)} 
      />

      {/* User Profile Modal */}
      <UserProfileModal 
        isOpen={showUserProfileModal} 
        onClose={() => setShowUserProfileModal(false)} 
      />

      {/* Command Palette Modal */}
      {showCommandPalette && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-start justify-center pt-20 z-50">
          <div className="w-full max-w-lg bg-popover border border-border rounded-lg shadow-xl">
            <div className="p-4">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Type a command or search..."
                  className="w-full pl-10 pr-4 py-3 bg-transparent border border-border rounded-md text-base focus:outline-none focus:ring-2 focus:ring-primary/20"
                  autoFocus
                />
              </div>
              <div className="mt-4 space-y-1">
                <div className="text-xs font-medium text-muted-foreground px-2 py-1">SUGGESTIONS</div>
                <button 
                  onClick={() => {
                    setShowCommandPalette(false);
                    // Add new chat tab logic
                  }}
                  className="w-full text-left px-3 py-2 rounded hover:bg-accent text-sm"
                >
                  New Chat
                </button>
                <button 
                  onClick={() => {
                    setShowCommandPalette(false);
                    // Add new code file logic
                  }}
                  className="w-full text-left px-3 py-2 rounded hover:bg-accent text-sm"
                >
                  New Code File
                </button>
                <button 
                  onClick={() => {
                    setShowCommandPalette(false);
                    // Add new notebook logic
                  }}
                  className="w-full text-left px-3 py-2 rounded hover:bg-accent text-sm"
                >
                  New Notebook
                </button>
                <button 
                  onClick={() => {
                    setShowCommandPalette(false);
                    setShowSettingsModal(true);
                  }}
                  className="w-full text-left px-3 py-2 rounded hover:bg-accent text-sm"
                >
                  Open Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 
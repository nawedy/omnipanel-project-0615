import { Theme } from '../types';

export const defaultTheme: Theme = {
  id: 'omnipanel-default',
  name: 'OmniPanel Default',
  description: 'The default theme for OmniPanel AI Workspace with a modern, professional design',
  version: '1.0.0',
  author: 'OmniPanel Team',
  category: 'official',
  type: 'static',
  
  metadata: {
    created: '2024-01-01T00:00:00Z',
    updated: '2024-01-01T00:00:00Z',
    tags: ['default', 'professional', 'modern', 'light'],
    preview: '/themes/default/preview.png',
    screenshots: [
      '/themes/default/screenshot-dashboard.png',
      '/themes/default/screenshot-editor.png',
      '/themes/default/screenshot-chat.png'
    ],
    compatibility: ['web', 'desktop', 'mobile'],
    license: 'MIT',
    homepage: 'https://omnipanel.ai/themes/default',
    repository: 'https://github.com/omnipanel/themes'
  },

  colors: {
    // Primary blue color palette
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6', // Base primary
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
      950: '#172554'
    },

    // Secondary slate color palette
    secondary: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b', // Base secondary
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
      950: '#020617'
    },

    // Accent emerald color palette
    accent: {
      50: '#ecfdf5',
      100: '#d1fae5',
      200: '#a7f3d0',
      300: '#6ee7b7',
      400: '#34d399',
      500: '#10b981', // Base accent
      600: '#059669',
      700: '#047857',
      800: '#065f46',
      900: '#064e3b',
      950: '#022c22'
    },

    // Neutral gray color palette
    neutral: {
      50: '#fafafa',
      100: '#f4f4f5',
      200: '#e4e4e7',
      300: '#d4d4d8',
      400: '#a1a1aa',
      500: '#71717a', // Base neutral
      600: '#52525b',
      700: '#3f3f46',
      800: '#27272a',
      900: '#18181b',
      950: '#09090b'
    },

    semantic: {
      success: {
        light: '#dcfce7',
        default: '#22c55e',
        dark: '#15803d',
        contrast: '#ffffff'
      },
      warning: {
        light: '#fef3c7',
        default: '#f59e0b',
        dark: '#d97706',
        contrast: '#ffffff'
      },
      error: {
        light: '#fee2e2',
        default: '#ef4444',
        dark: '#dc2626',
        contrast: '#ffffff'
      },
      info: {
        light: '#dbeafe',
        default: '#3b82f6',
        dark: '#2563eb',
        contrast: '#ffffff'
      },
      text: {
        primary: '#111827',
        secondary: '#6b7280',
        muted: '#9ca3af',
        disabled: '#d1d5db',
        inverse: '#ffffff'
      },
      border: {
        default: '#e5e7eb',
        muted: '#f3f4f6',
        subtle: '#f9fafb',
        strong: '#d1d5db'
      }
    },

    surface: {
      background: '#ffffff',
      foreground: '#fafafa',
      card: '#ffffff',
      popover: '#ffffff',
      modal: '#ffffff',
      sidebar: '#f9fafb',
      header: '#ffffff',
      footer: '#f9fafb'
    },

    state: {
      hover: 'rgba(59, 130, 246, 0.05)',
      active: 'rgba(59, 130, 246, 0.1)',
      focus: '#3b82f6',
      disabled: '#f3f4f6',
      selected: 'rgba(59, 130, 246, 0.1)',
      pressed: 'rgba(59, 130, 246, 0.15)'
    },

    syntax: {
      keyword: '#7c3aed',
      string: '#059669',
      number: '#dc2626',
      comment: '#6b7280',
      operator: '#374151',
      function: '#2563eb',
      variable: '#1f2937',
      type: '#7c2d12',
      constant: '#be185d',
      tag: '#dc2626',
      attribute: '#059669',
      punctuation: '#6b7280'
    }
  },

  typography: {
    fonts: {
      sans: [
        'Inter',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'sans-serif'
      ],
      serif: [
        'Charter',
        'Bitstream Charter',
        'Sitka Text',
        'Cambria',
        'serif'
      ],
      mono: [
        'JetBrains Mono',
        'Fira Code',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace'
      ],
      display: [
        'Cal Sans',
        'Inter',
        '-apple-system',
        'BlinkMacSystemFont',
        'sans-serif'
      ]
    },

    sizes: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem',    // 48px
      '6xl': '3.75rem', // 60px
      '7xl': '4.5rem',  // 72px
      '8xl': '6rem',    // 96px
      '9xl': '8rem'     // 128px
    },

    weights: {
      thin: 100,
      extralight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900
    },

    lineHeights: {
      none: 1,
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2
    },

    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em'
    },

    textStyles: {
      h1: {
        fontSize: '2.25rem',
        fontWeight: 700,
        lineHeight: 1.2,
        letterSpacing: '-0.025em'
      },
      h2: {
        fontSize: '1.875rem',
        fontWeight: 600,
        lineHeight: 1.3,
        letterSpacing: '-0.025em'
      },
      h3: {
        fontSize: '1.5rem',
        fontWeight: 600,
        lineHeight: 1.4
      },
      h4: {
        fontSize: '1.25rem',
        fontWeight: 600,
        lineHeight: 1.4
      },
      h5: {
        fontSize: '1.125rem',
        fontWeight: 600,
        lineHeight: 1.4
      },
      h6: {
        fontSize: '1rem',
        fontWeight: 600,
        lineHeight: 1.4
      },
      body: {
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: 1.5
      },
      caption: {
        fontSize: '0.875rem',
        fontWeight: 400,
        lineHeight: 1.4
      },
      label: {
        fontSize: '0.875rem',
        fontWeight: 500,
        lineHeight: 1.4
      },
      code: {
        fontSize: '0.875rem',
        fontWeight: 400,
        lineHeight: 1.6
      }
    }
  },

  spacing: {
    scale: {
      px: '1px',
      0: '0px',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem'
    },

    component: {
      button: {
        padding: { x: '1rem', y: '0.5rem' },
        margin: { x: '0', y: '0' },
        gap: '0.5rem'
      },
      input: {
        padding: { x: '0.75rem', y: '0.5rem' },
        margin: { x: '0', y: '0' },
        gap: '0.5rem'
      },
      card: {
        padding: { x: '1.5rem', y: '1.5rem' },
        margin: { x: '0', y: '1rem' },
        gap: '1rem'
      },
      modal: {
        padding: { x: '2rem', y: '2rem' },
        margin: { x: '1rem', y: '1rem' },
        gap: '1.5rem'
      },
      dropdown: {
        padding: { x: '0.75rem', y: '0.5rem' },
        margin: { x: '0', y: '0.25rem' },
        gap: '0.5rem'
      }
    },

    layout: {
      container: '80rem',
      section: '6rem',
      grid: '2rem',
      sidebar: '16rem',
      header: '4rem',
      footer: '3rem'
    }
  },

  components: {
    button: {
      base: {
        borderRadius: '0.375rem',
        fontWeight: 500,
        transition: 'all 0.2s ease-in-out',
        border: 'none',
        cursor: 'pointer'
      },
      variants: {
        primary: {
          backgroundColor: '#3b82f6',
          color: '#ffffff',
          hover: {
            backgroundColor: '#2563eb'
          },
          focus: {
            boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)'
          }
        },
        secondary: {
          backgroundColor: '#f1f5f9',
          color: '#334155',
          hover: {
            backgroundColor: '#e2e8f0'
          }
        },
        outline: {
          backgroundColor: 'transparent',
          color: '#3b82f6',
          border: '1px solid #3b82f6',
          hover: {
            backgroundColor: '#3b82f6',
            color: '#ffffff'
          }
        },
        ghost: {
          backgroundColor: 'transparent',
          color: '#64748b',
          hover: {
            backgroundColor: 'rgba(59, 130, 246, 0.05)'
          }
        },
        link: {
          backgroundColor: 'transparent',
          color: '#3b82f6',
          textDecoration: 'underline'
        },
        destructive: {
          backgroundColor: '#ef4444',
          color: '#ffffff',
          hover: {
            backgroundColor: '#dc2626'
          }
        }
      },
      sizes: {
        sm: {
          padding: '0.25rem 0.75rem',
          fontSize: '0.875rem',
          height: '2rem'
        },
        md: {
          padding: '0.5rem 1rem',
          fontSize: '1rem',
          height: '2.5rem'
        },
        lg: {
          padding: '0.75rem 1.5rem',
          fontSize: '1.125rem',
          height: '3rem'
        },
        xl: {
          padding: '1rem 2rem',
          fontSize: '1.25rem',
          height: '3.5rem'
        }
      }
    },

    input: {
      base: {
        borderRadius: '0.375rem',
        border: '1px solid #e5e7eb',
        backgroundColor: '#ffffff',
        transition: 'border-color 0.2s ease-in-out'
      },
      variants: {
        default: {
          borderColor: '#e5e7eb',
          focus: {
            borderColor: '#3b82f6',
            boxShadow: '0 0 0 1px #3b82f6'
          }
        },
        filled: {
          backgroundColor: '#f9fafb',
          border: 'none'
        },
        outline: {
          backgroundColor: 'transparent',
          borderColor: '#d1d5db'
        },
        underline: {
          backgroundColor: 'transparent',
          border: 'none',
          borderBottom: '1px solid #e5e7eb'
        }
      },
      sizes: {
        sm: {
          padding: '0.25rem 0.5rem',
          fontSize: '0.875rem',
          height: '2rem'
        },
        md: {
          padding: '0.5rem 0.75rem',
          fontSize: '1rem',
          height: '2.5rem'
        },
        lg: {
          padding: '0.75rem 1rem',
          fontSize: '1.125rem',
          height: '3rem'
        }
      },
      states: {
        default: {},
        hover: {
          borderColor: '#d1d5db'
        },
        active: {},
        focus: {
          outline: 'none',
          borderColor: '#3b82f6'
        },
        disabled: {
          opacity: 0.5,
          cursor: 'not-allowed'
        },
        error: {
          borderColor: '#ef4444'
        },
        success: {
          borderColor: '#22c55e'
        }
      }
    },

    card: {
      base: {
        backgroundColor: '#ffffff',
        borderRadius: '0.5rem',
        border: '1px solid #e5e7eb',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
      },
      variants: {
        default: {},
        outlined: {
          boxShadow: 'none',
          border: '1px solid #e5e7eb'
        },
        elevated: {
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
        },
        filled: {
          backgroundColor: '#f9fafb',
          border: 'none'
        }
      }
    },

    modal: {
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(4px)'
      },
      content: {
        backgroundColor: '#ffffff',
        borderRadius: '0.75rem',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
      },
      header: {
        borderBottom: '1px solid #e5e7eb'
      },
      body: {},
      footer: {
        borderTop: '1px solid #e5e7eb'
      }
    },

    sidebar: {},
    header: {},
    footer: {},
    dropdown: {},
    tooltip: {},
    badge: {},
    avatar: {},
    progress: {},
    slider: {},
    switch: {},
    checkbox: {},
    radio: {},
    select: {},
    textarea: {},
    table: {},
    tabs: {},
    accordion: {}
  },

  layout: {
    breakpoints: {
      xs: '475px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },

    containers: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      full: '100%'
    },

    grid: {
      columns: 12,
      gap: '1.5rem',
      columnGap: '1.5rem',
      rowGap: '1.5rem'
    },

    flexbox: {
      gap: '1rem',
      columnGap: '1rem',
      rowGap: '1rem'
    }
  },

  effects: {
    shadows: {
      xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
      none: 'none'
    },

    borders: {
      radius: {
        none: '0px',
        sm: '0.125rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        full: '9999px'
      },
      width: {
        0: '0px',
        2: '2px',
        4: '4px',
        8: '8px',
        default: '1px'
      },
      style: {
        solid: 'solid',
        dashed: 'dashed',
        dotted: 'dotted',
        double: 'double',
        none: 'none'
      }
    },

    animations: {
      duration: {
        75: '75ms',
        100: '100ms',
        150: '150ms',
        200: '200ms',
        300: '300ms',
        500: '500ms',
        700: '700ms',
        1000: '1000ms'
      },
      easing: {
        linear: 'linear',
        ease: 'ease',
        'ease-in': 'ease-in',
        'ease-out': 'ease-out',
        'ease-in-out': 'ease-in-out',
        bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        elastic: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
      },
      keyframes: {
        fadeIn: 'fadeIn 0.2s ease-in-out',
        fadeOut: 'fadeOut 0.2s ease-in-out',
        slideIn: 'slideIn 0.3s ease-out',
        slideOut: 'slideOut 0.3s ease-in',
        scaleIn: 'scaleIn 0.2s ease-out',
        scaleOut: 'scaleOut 0.2s ease-in',
        rotateIn: 'rotateIn 0.3s ease-out',
        rotateOut: 'rotateOut 0.3s ease-in'
      }
    },

    transitions: {
      property: {
        none: 'none',
        all: 'all',
        colors: 'background-color, border-color, color, fill, stroke',
        opacity: 'opacity',
        shadow: 'box-shadow',
        transform: 'transform'
      },
      duration: {
        75: '75ms',
        100: '100ms',
        150: '150ms',
        200: '200ms',
        300: '300ms',
        500: '500ms',
        700: '700ms',
        1000: '1000ms'
      },
      timing: {
        linear: 'linear',
        ease: 'ease',
        'ease-in': 'ease-in',
        'ease-out': 'ease-out',
        'ease-in-out': 'ease-in-out'
      },
      delay: {
        75: '75ms',
        100: '100ms',
        150: '150ms',
        200: '200ms',
        300: '300ms',
        500: '500ms',
        700: '700ms',
        1000: '1000ms'
      }
    },

    filters: {
      blur: {
        none: 'blur(0)',
        sm: 'blur(4px)',
        md: 'blur(8px)',
        lg: 'blur(16px)',
        xl: 'blur(24px)',
        '2xl': 'blur(40px)',
        '3xl': 'blur(64px)'
      },
      brightness: {
        0: 'brightness(0)',
        50: 'brightness(0.5)',
        75: 'brightness(0.75)',
        90: 'brightness(0.9)',
        95: 'brightness(0.95)',
        100: 'brightness(1)',
        105: 'brightness(1.05)',
        110: 'brightness(1.1)',
        125: 'brightness(1.25)',
        150: 'brightness(1.5)',
        200: 'brightness(2)'
      },
      contrast: {
        0: 'contrast(0)',
        50: 'contrast(0.5)',
        75: 'contrast(0.75)',
        100: 'contrast(1)',
        125: 'contrast(1.25)',
        150: 'contrast(1.5)',
        200: 'contrast(2)'
      },
      grayscale: {
        0: 'grayscale(0)',
        100: 'grayscale(1)'
      },
      opacity: {
        0: 'opacity(0)',
        5: 'opacity(0.05)',
        10: 'opacity(0.1)',
        20: 'opacity(0.2)',
        25: 'opacity(0.25)',
        30: 'opacity(0.3)',
        40: 'opacity(0.4)',
        50: 'opacity(0.5)',
        60: 'opacity(0.6)',
        70: 'opacity(0.7)',
        75: 'opacity(0.75)',
        80: 'opacity(0.8)',
        90: 'opacity(0.9)',
        95: 'opacity(0.95)',
        100: 'opacity(1)'
      },
      saturate: {
        0: 'saturate(0)',
        50: 'saturate(0.5)',
        100: 'saturate(1)',
        150: 'saturate(1.5)',
        200: 'saturate(2)'
      },
      sepia: {
        0: 'sepia(0)',
        100: 'sepia(1)'
      }
    }
  },

  custom: {
    logoUrl: '/logos/omnipanel-default.svg',
    accentGradient: 'linear-gradient(135deg, #3b82f6 0%, #10b981 100%)',
    heroPattern: 'url("/patterns/grid.svg")',
    codeTheme: 'github-light',
    animations: {
      enabled: true,
      reducedMotion: false
    }
  }
}; 
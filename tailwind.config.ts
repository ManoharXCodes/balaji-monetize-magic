import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Brand Colors
				brand: {
					'deep-space': 'hsl(var(--brand-deep-space))',
					'cosmic-purple': 'hsl(var(--brand-cosmic-purple))',
					'royal-violet': 'hsl(var(--brand-royal-violet))',
					'mystic-indigo': 'hsl(var(--brand-mystic-indigo))',
					'copper': 'hsl(var(--brand-copper))',
					'gold': 'hsl(var(--brand-gold))',
					'warm-copper': 'hsl(var(--brand-warm-copper))',
					'bright-gold': 'hsl(var(--brand-bright-gold))',
					'moon-white': 'hsl(var(--brand-moon-white))',
					'pearl': 'hsl(var(--brand-pearl))',
					'silver': 'hsl(var(--brand-silver))',
					'cosmic-gray': 'hsl(var(--brand-cosmic-gray))'
				}
			},
			backgroundImage: {
				'gradient-cosmic': 'var(--gradient-cosmic)',
				'gradient-royal': 'var(--gradient-royal)',
				'gradient-gold': 'var(--gradient-gold)',
				'gradient-hero': 'var(--gradient-hero)'
			},
			boxShadow: {
				'cosmic': 'var(--shadow-cosmic)',
				'copper': 'var(--shadow-copper)',
				'gold': 'var(--shadow-gold)',
				'glow-copper': 'var(--glow-copper)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'xl': 'var(--radius-lg)',
				'2xl': 'var(--radius-xl)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'twinkle': {
					'0%': { transform: 'translateY(0) translateX(0)' },
					'100%': { transform: 'translateY(-100px) translateX(-100px)' }
				},
				'fadeIn': {
					from: { opacity: '0', transform: 'translateY(20px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'slideUp': {
					from: { opacity: '0', transform: 'translateY(40px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: 'var(--glow-copper)' },
					'50%': { boxShadow: 'var(--shadow-gold)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'twinkle': 'twinkle 20s linear infinite',
				'fade-in': 'fadeIn 0.8s ease-out forwards',
				'slide-up': 'slideUp 0.8s ease-out forwards',
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

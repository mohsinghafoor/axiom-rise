# Dark Mode Implementation Guide

## What Was Added

### 1. **Theme Context** (`src/contexts/ThemeContext.tsx`)
- Manages global theme state (light/dark)
- Persists theme preference in localStorage
- Respects system theme preference
- Prevents flash of wrong theme on page load

### 2. **Theme Toggle Component** (`src/components/ThemeToggle.tsx`)
- Animated sun/moon icon button
- Smooth transitions between themes
- Hover tooltip showing current mode
- Works on both desktop and mobile

### 3. **Tailwind Configuration**
- Added `darkMode: 'class'` to `tailwind.config.js`
- Enables dark mode using class-based approach

### 4. **Layout Updates**
- Wrapped app with `ThemeProvider`
- Added `suppressHydrationWarning` to prevent hydration mismatch
- Added dark mode background classes

### 5. **Navbar Integration**
- Theme toggle button added next to "Talk to Expert" on desktop
- Theme toggle button added next to mobile menu button

## How to Use Dark Mode in Your Components

### Basic Usage
Add `dark:` prefix to any Tailwind class:

```tsx
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  Content
</div>
```

### Common Dark Mode Patterns

**Backgrounds:**
- `bg-white dark:bg-gray-900`
- `bg-gray-50 dark:bg-gray-800`
- `bg-gray-100 dark:bg-gray-700`

**Text:**
- `text-gray-900 dark:text-white`
- `text-gray-700 dark:text-gray-200`
- `text-gray-600 dark:text-gray-400`

**Borders:**
- `border-gray-200 dark:border-gray-700`
- `border-gray-300 dark:border-gray-600`

**Shadows:**
- `shadow-md dark:shadow-gray-800/50`

### Accessing Theme in Components

```tsx
"use client";

import { useTheme } from '@/contexts/ThemeContext';

export default function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div>
      Current theme: {theme}
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
}
```

## Next Steps

To fully implement dark mode across your site, you'll need to:

1. **Update existing components** - Add dark mode classes to:
   - HeroSection
   - ManufacturingSection
   - CustomClothingSection
   - FeaturesSection
   - WhyChooseSection
   - ProductCategoriesSection
   - CTASection
   - Footer
   - All page components

2. **Update gradients** - Adjust gradient colors for dark mode:
   ```tsx
   className="bg-gradient-to-r from-primary-600 to-blue-600 
              dark:from-primary-500 dark:to-blue-500"
   ```

3. **Update images** - Some images may need dark variants or overlays

4. **Test thoroughly** - Check all pages in both light and dark mode

## Features Included

✅ Automatic theme persistence
✅ System theme preference detection
✅ Smooth transitions between themes
✅ No flash of wrong theme on load
✅ Animated toggle button with icons
✅ Works on all devices
✅ Accessible (keyboard navigation, ARIA labels)

## Browser Support

Works on all modern browsers that support:
- CSS custom properties
- localStorage
- matchMedia (for system preference)

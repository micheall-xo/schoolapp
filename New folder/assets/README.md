# Assets Directory

This directory contains all the static assets for the Creative Readers mobile app.

## Required Files

### App Icons
- `icon.png` - Main app icon (1024x1024 px)
- `adaptive-icon.png` - Android adaptive icon (1024x1024 px)
- `favicon.png` - Web favicon (32x32 px)

### Splash Screen
- `splash.png` - App splash screen image (1242x2436 px)

## Image Specifications

### App Icon
- **Size**: 1024x1024 pixels
- **Format**: PNG with transparency
- **Design**: Should represent the "Creative Readers" brand
- **Colors**: Use the app's color scheme (blue and green)

### Splash Screen
- **Size**: 1242x2436 pixels (iPhone X resolution)
- **Format**: PNG
- **Background**: White (#ffffff)
- **Content**: App logo and name centered

### Adaptive Icon (Android)
- **Size**: 1024x1024 pixels
- **Format**: PNG
- **Design**: Should work well with Android's adaptive icon system
- **Safe Zone**: Keep important elements within the center 66% of the image

## Design Guidelines

1. **Consistency**: All icons should follow the same design language
2. **Readability**: Icons should be clear and recognizable at small sizes
3. **Branding**: Use the app's color scheme and typography
4. **Simplicity**: Avoid overly complex designs that don't scale well

## File Naming Convention

- Use lowercase letters
- Separate words with hyphens
- Include file extensions
- Example: `app-icon.png`, `splash-screen.png`

## Optimization

- Compress PNG files to reduce app size
- Use appropriate color depths (24-bit for photos, 8-bit for simple graphics)
- Test icons at various sizes to ensure clarity

## Notes

- These assets are referenced in `app.json`
- Changes to assets require rebuilding the app
- Test on both iOS and Android devices
- Ensure assets meet platform-specific requirements

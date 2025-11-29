# Agents - Vortech Force Krammer

Diese Datei dokumentiert die verfügbaren KI-Agenten und Tools für das Vortech Force Krammer Projekt.

## Projektkontext

**Projekt:** Vortech Force Krammer Homepage
**Typ:** JamStack Website (Static Export)
**Zweck:** Generalimport und Vertrieb von VORTECH FORCE Reinigungssystemen in Deutschland
**Betreiber:** Elfi Bast / Ronny Krammer
**Zielgruppe:** Privatkunden, besonders Allergiker

## Tech Stack

### Core

- **Framework:** Next.js 16 (App Router)
- **React:** 19 mit JSX Transform
- **Sprache:** TypeScript (Strict Mode)
- **Build:** Static Export für JamStack

### Styling & UI

- **CSS Framework:** Tailwind CSS 4
- **UI-Komponenten:** @salzpate/react-ui
- **Animations:** tailwindcss-animate

### Formulare & Daten

- **Formulare:** react-hook-form
- **HTTP Client:** axios
- **Utilities:** classnames, tailwind-merge

### Code Quality & Testing

- **Linting:** ESLint 9 + eslint-config-next + eslint-plugin-simple-import-sort
- **Styling:** Stylelint mit alphabetischer Property-Sortierung
- **Formatierung:** Prettier + prettier-plugin-tailwindcss
- **Testing:** Vitest + @testing-library/react + @testing-library/user-event
- **Mocking:** Vitest vi für Mocks und Spies

## MCP Server

### Next.js DevTools

Der Next.js DevTools MCP Server bietet spezialisierte Tools für die Entwicklung und Analyse dieser Next.js-Anwendung.

**Konfiguration:** `.mcp.json`

**Funktionen:**

- Analyse von Next.js-Routen und Komponenten
- Überprüfung der Projektstruktur
- Debugging-Unterstützung für Next.js-spezifische Features
- Performance-Analyse

**Verwendung:**

```bash
npx -y next-devtools-mcp@latest
```

## Projektstruktur

```
/app                          # Next.js App Router
  ├── page.tsx               # Homepage (/)
  ├── layout.tsx             # Root Layout
  ├── loading.tsx            # Loading State
  ├── not-found.tsx          # 404 Page
  ├── _sitemap.ts            # Sitemap Generator
  ├── /vortech-force         # Produktseite
  ├── /kontakt               # Kontaktseite
  ├── /impressum             # Impressum
  ├── /datenschutz           # Datenschutzerklärung
  └── /agb                   # AGB

/components                   # React-Komponenten
  ├── /Contact               # Kontaktformular
  │   └── /ContactForm
  ├── /Header                # Header-Komponenten
  │   ├── /Header
  │   ├── /HeaderImage
  │   └── /NavBarLink
  ├── /Footer                # Footer
  ├── /HeaderMainLayout      # Main Layout Wrapper
  ├── /PageSection           # Section Container
  ├── /QuickSearch           # Suchfunktion
  ├── /ScrollToTop           # Scroll-to-Top Button
  ├── /SiteMap               # Sitemap Component
  ├── /SkipLink              # Accessibility Skip Link
  ├── /SnackBar              # Notification System
  └── /commons               # Gemeinsame Komponenten
      └── /Menu

/styles                       # CSS-Module
/public                       # Statische Assets
  └── /assets/images         # Bilder
/lib                          # Utility-Funktionen & APIs
/data                         # Statische Daten
/hooks                        # Custom React Hooks
/feature                      # Feature-Module
```

## Build-Konfiguration

### Next.js Config (`next.config.ts`)

- **Output:** Static Export (`output: 'export'`)
- **Trailing Slashes:** Aktiviert für SEO
- **React Strict Mode:** Aktiviert
- **Production Optimierungen:**
  - Kompression aktiviert
  - Console-Logs entfernt (außer error/warn)
  - Source Maps deaktiviert
- **Experimental:**
  - Package Import Optimierung für @salzpate/react-ui
  - Scroll Restoration deaktiviert

### TypeScript Config

- **Target:** ESNext
- **Strict Mode:** Vollständig aktiviert
- **Path Aliases:**
  - `@/components/*` → `components/*`
  - `@/data/*` → `data/*`
  - `@/features/*` → `features/*`
  - `@/hooks/*` → `hooks/*`
  - `@/lib/*` → `lib/*`
  - `@/styles/*` → `styles/*`
  - `@/utils/*` → `utils/*`

### Tailwind Config

- **Content:** App, Pages, Components
- **Plugins:** Animations, Custom Utilities

## Routing-Struktur

| Route             | Beschreibung                            | Layout           |
| ----------------- | --------------------------------------- | ---------------- |
| `/`               | Homepage mit Produktübersicht + Kontakt | HeaderMainLayout |
| `/vortech-force/` | Produktdetails VORTECH FORCE            | Custom Layout    |
| `/kontakt/`       | Kontaktseite                            | Custom Layout    |
| `/impressum/`     | Impressum                               | Custom Layout    |
| `/datenschutz/`   | Datenschutzerklärung                    | Custom Layout    |
| `/agb/`           | Allgemeine Geschäftsbedingungen         | Custom Layout    |

## Entwicklungs-Workflows

### Development

```bash
npm run dev              # Development Server (localhost:3000)
```

### Build & Deploy

```bash
npm run build           # Static Export nach /out
npm start               # Production Server
```

### Code Quality

```bash
npm run lint              # ESLint + TypeScript Check
npm run lint:style        # Stylelint fix für CSS
npm run lint:style:check  # Stylelint check für CSS
npm run format            # Code-Formatierung
npm run format:check      # Code-Formatierung überprüfung
```

## Komponenten-Architektur

### Eigene Komponenten

- **Layout:** HeaderMainLayout, PageSection
- **Navigation:** Header, Footer, NavBarLink, QuickSearch
- **Content:** HeaderImage, SiteMap
- **Interaktion:** ContactForm, ScrollToTop, SnackBar
- **Accessibility:** SkipLink

### Externe Komponenten (@salzpate/react-ui)

- ContactCard
- MoreLink
- PageSection
- Weitere UI-Komponenten

### Komponenten-Pattern

- Modulare Struktur mit Index-Exports
- TypeScript für Type Safety
- CSS Modules für Styling
- Client Components (`'use client'`) wo nötig

## Implementierungshinweise

- Falls es Bedingungen im Tailwindcss className String gibt, soll die utility Methode cn() verwendet werden.


## Wichtige Hinweise für Agenten

### Sprache & Inhalt

- **Sprache:** Deutsch - alle Inhalte, Komponenten und Kommentare auf Deutsch
- **Tone:** Professionell, kundenorientiert
- **Fokus:** Produktpräsentation und Kontaktaufnahme

### Design & UX

- **Responsive:** Mobile-First Approach
- **Dark Mode:** Vollständig unterstützt
- **Accessibility:** WCAG-konform (SkipLink, semantisches HTML)
- **Performance:** Optimiert für schnelle Ladezeiten
- **Icons:** Hero Icons



### SEO & Marketing

- Sitemap automatisch generiert
- Trailing Slashes für konsistente URLs
- Meta-Tags in Layouts
- Strukturierte Daten

### Code-Standards

- TypeScript Strict Mode mit allen Strict-Flags
- ESLint Flat Config mit automatischer Import-Sortierung
- Prettier mit Tailwind-Plugin für konsistente Formatierung
- Komponenten-basierte Architektur mit Unit-Tests
- Path Aliases für saubere Imports (@/components, @/hooks, etc.)
- 100% Test-Coverage für Komponenten und Hooks

### API & Backend

- Kontaktformular: `/lib/sendmail.php`
- Email-Handler: `/lib/mailto.php`
- Statische Daten in `/data`

## Testing

Vitest ist konfiguriert für Unit Tests mit React Testing Library.

```bash
npm run test            # Tests ausführen (Single Run)
npm run test:watch      # Tests im Watch-Mode
npm run test:ui         # Vitest UI
npm run test:coverage   # Coverage Report
```

### Test-Struktur

- **Komponenten-Tests:** Alle Komponenten in `/components` haben `.test.tsx` Dateien
- **Hook-Tests:** Custom Hooks in `/hooks` haben `.test.ts` Dateien
- **Globals:** Vitest Globals aktiviert (describe, it, expect, vi, beforeEach)
- **Setup:** `vitest.setup.ts` mit @testing-library/jest-dom

## MCP Server Verwaltung

Für die Verwaltung der MCP-Server:

1. Öffne die Command Palette und suche nach "MCP"
2. Nutze die MCP Server View im Kiro Feature Panel
3. Bearbeite `.mcp.json` für Konfigurationsänderungen
4. Server reconnecten automatisch bei Config-Änderungen

## Deployment

Das Projekt ist für statisches Hosting optimiert:

- Build Output: `/out` Verzeichnis
- Hosting-Optionen: Netlify, Vercel, GitHub Pages, etc.
- Keine Server-Side Runtime erforderlich

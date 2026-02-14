# 🦜 OpenClaw Lab - Instrukcje dla Claude Code

## Informacje o Projekcie

**Nazwa:** OpenClaw Lab
**Język:** Polski
**Typ:** Statyczna strona HTML/CSS/JS dokumentująca eksperymenty z OpenClaw
**Hosting:** GitHub Pages
**URL:** https://kea-replicant.github.io/experiments/
**GitHub:** https://github.com/kea-replicant/experiments

## Styl i Design

- **Inspiracja:** develtio.com
- **Kolory:**
  - Zielony: `#17ff81`
  - Fioletowy: `#9b51e0`
  - Niebieski: `#0693e3`
  - Ciemny: `#32373c`
- **Styl:** Prosty, czysty, profesjonalny (NO fancy animations)
- **Emoji:** 🦜 (papuga) i 🦞 (szczypce/claw)

## Struktura Projektu

```
openclaw-website/
├── index.html              # Strona główna
├── experiments.html        # Lista wszystkich eksperymentów
├── about.html             # O projekcie
├── css/style.css          # Style (Develtio-inspired)
├── js/main.js             # Podstawowa interaktywność
├── experiments/
│   ├── TEMPLATE.html      # Szablon nowego eksperymentu
│   ├── experiment-001.html
│   ├── experiment-002.html
│   └── ...
└── images/                # Zrzuty ekranu i grafiki
```

## Jak Dodać Nowy Eksperyment

### Metoda 1: Automatyczna (Preferowana)

Użytkownik powie:
> "Dodaj nowy eksperyment #XXX o [temat]. Oto treść: [treść]"

**Kroki:**
1. Skopiuj `experiments/TEMPLATE.html` do `experiments/experiment-XXX.html`
2. Wypełnij szablon treścią użytkownika
3. Zaktualizuj `experiments.html` (dodaj kartę przed placeholder)
4. Zaktualizuj `index.html` (zamień pierwszą kartę na najnowszy eksperyment)
5. Zaktualizuj statystykę w `index.html` (liczba eksperymentów)
6. Commit i push do GitHub

### Metoda 2: Ręczna

Użytkownik może sam edytować pliki. Szczegóły w `JAK-DODAC-EKSPERYMENT.md`

## Publikacja

Po każdej zmianie:
```bash
cd /Users/parrotsclaw/Documents/openclaw-website
git add .
git commit -m "Opis zmian

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
git push
```

GitHub Pages automatycznie zaktualizuje stronę w ciągu 1-2 minut.

## Struktura Eksperymentu

Każdy eksperyment zawiera sekcje:
1. **Przegląd** (Overview) - Co to jest?
2. **Cele** (Objectives) - Lista celów
3. **Proces** (Process) - Krok po kroku
4. **Odkrycia** (Findings) - Co odkryto?
5. **Zrzuty Ekranu** (Screenshots) - Opcjonalnie
6. **Wnioski** (Conclusions) - Czego się nauczyłeś?
7. **Następne Kroki** (Next Steps) - Co dalej?

## Tagi

Używane tagi:
- `openClaw` - Główny tag
- `AI-agent` - Agenty AI
- `automatyzacja` - Automatyzacja
- `konfiguracja` - Setup i konfiguracja
- `podstawy` - Podstawowe koncepty
- `zaawansowane` - Zaawansowane tematy
- `debugowanie` - Rozwiązywanie problemów
- `testy` - Testowanie

## Ważne Preferencje Użytkownika

❌ **NIE UŻYWAJ:**
- Skomplikowanych animacji ("WOW effects")
- Funkcji wyszukiwania (GitHub Pages tego nie obsługuje statycznie)
- Emoji bez wyraźnej prośby

✅ **UŻYWAJ:**
- Prostego, czystego designu
- Polskiego języka
- Develtio-inspired colors
- Responsive design

## GitHub & Git

- **Branch:** main
- **Remote:** origin (https://github.com/kea-replicant/experiments.git)
- **GitHub CLI:** Skonfigurowane (`gh auth login`)
- **User:** kea-replicant

## Przyszłe Plany

- [ ] Podłączenie własnej domeny z GoDaddy (gdy użytkownik kupi)
- [ ] DNS configuration dla custom domain
- [ ] HTTPS z custom domain

## Notatki

- Użytkownik nie jest programistą - używaj prostego języka
- Wszystkie instrukcje po polsku
- Projekt ma być fun ale profesjonalny
- Website dokumentuje podróż z OpenClaw eksperymentami

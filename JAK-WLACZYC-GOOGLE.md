# 🔍 Jak Włączyć Indeksowanie przez Google

Strona jest obecnie **nieindeksowana** przez Google i inne wyszukiwarki.

---

## Kiedy Będziesz Gotowy na Publikację:

### Krok 1: Zaktualizuj `robots.txt`

Otwórz plik `robots.txt` i zamień zawartość na:

```txt
# robots.txt - OpenClaw Lab
# Allowing search engine indexing

User-agent: *
Allow: /

Sitemap: https://parrotsclaw.com/sitemap.xml
```

### Krok 2: Usuń Meta Tagi

W **KAŻDYM** pliku HTML usuń tę linię:

```html
<meta name="robots" content="noindex, nofollow">
```

**Pliki do edycji:**
- [ ] `index.html`
- [ ] `experiments.html`
- [ ] `about.html`
- [ ] `experiments/experiment-001.html`
- [ ] `experiments/TEMPLATE.html`
- [ ] Wszystkie przyszłe eksperymenty

### Krok 3: Opublikuj

```bash
cd /Users/parrotsclaw/Documents/openclaw-website
git add .
git commit -m "Włączono indeksowanie przez Google"
git push
```

### Krok 4: Poinformuj Google (Opcjonalnie)

1. Idź na [Google Search Console](https://search.google.com/search-console)
2. Dodaj swoją stronę (`parrotsclaw.com`)
3. Prześlij sitemap: `https://parrotsclaw.com/sitemap.xml`

---

## LUB Poproś Claude Code:

Po prostu powiedz:
> "Włącz indeksowanie przez Google"

I zrobię wszystko automatycznie! 🦜

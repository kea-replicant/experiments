# 🧪 Jak Dodać Nowy Eksperyment

## Metoda 1: Poproś Claude Code (Najłatwiejsza!)

Po prostu powiedz mi:
> "Dodaj nowy eksperyment o [temat]. Zrobiłem [co zrobiłeś] i odkryłem, że [twoje odkrycia]."

Stworzę za Ciebie cały plik i zaktualizuję listę!

---

## Metoda 2: Ręcznie (Krok po kroku)

### Krok 1: Skopiuj Szablon

```bash
cd /Users/parrotsclaw/Documents/openclaw-website
cp experiments/TEMPLATE.html experiments/experiment-002.html
```

### Krok 2: Edytuj Nowy Plik

Otwórz `experiments/experiment-002.html` w edytorze tekstu i zamień:

- `#XXX` → `#002` (numer eksperymentu)
- `[Your Experiment Title]` → Twój tytuł
- `[Date]` → Data (np. "15 Lutego, 2026")
- `[tag1]`, `[tag2]` → Twoje tagi (np. "testy", "konfiguracja")
- Wypełnij wszystkie sekcje swoją treścią

### Krok 3: Dodaj Zdjęcia (Opcjonalnie)

1. Wrzuć zdjęcia do folderu `images/`
2. Nazwij je np: `experiment-002-screenshot-1.png`
3. W HTML dodaj:
```html
<img src="../images/experiment-002-screenshot-1.png" alt="Opis">
```

### Krok 4: Zaktualizuj Listę Eksperymentów

#### A) W `experiments.html`:

Znajdź sekcję `<!-- Experiments Grid -->` i dodaj przed placeholder:

```html
<article class="experiment-card" data-tags="twoje tagi">
    <div class="card-header">
        <span class="experiment-number">#002</span>
        <span class="experiment-date">15 Lut, 2026</span>
    </div>
    <h3 class="card-title">Tytuł Twojego Eksperymentu</h3>
    <p class="card-excerpt">
        Krótki opis eksperymentu...
    </p>
    <div class="card-footer">
        <a href="experiments/experiment-002.html" class="read-more">
            Czytaj Więcej →
        </a>
        <div class="card-tags">
            <span class="tag">tag1</span>
            <span class="tag">tag2</span>
        </div>
    </div>
</article>
```

#### B) W `index.html` (Opcjonalnie):

Jeśli chcesz pokazać eksperyment na stronie głównej, zamień pierwszą kartę na najnowszy eksperyment.

#### C) Zaktualizuj statystyki w `index.html`:

Znajdź `<div class="stat-number">1</div>` i zmień na `2` (lub ile masz eksperymentów).

### Krok 5: Zobacz Zmiany

Otwórz `index.html` w przeglądarce i sprawdź czy wszystko wygląda dobrze!

---

## Struktura Eksperymentu

Każdy eksperyment powinien zawierać:

### 1. **Przegląd** (Overview)
Czym jest ten eksperyment? Co chciałeś osiągnąć?

### 2. **Cele** (Objectives)
Lista punktów - co chciałeś przetestować/zrobić:
- Cel 1
- Cel 2
- Cel 3

### 3. **Proces** (Process)
Krok po kroku co zrobiłeś:

**Krok 1:** Opis
```bash
# Przykładowa komenda
```

**Krok 2:** Opis

**Krok 3:** Opis

### 4. **Odkrycia** (Findings)
Co odkryłeś? Co zadziałało? Co nie?
- Odkrycie 1
- Odkrycie 2

### 5. **Zrzuty Ekranu** (Screenshots)
Jeśli masz - dodaj zdjęcia!

### 6. **Wnioski** (Conclusions)
Czego się nauczyłeś? Co byś zmienił następnym razem?

### 7. **Następne Kroki** (Next Steps)
Co planujesz zbadać dalej?

---

## Sugerowane Tagi

Użyj tych tagów do kategoryzacji:
- `konfiguracja` - Instalacja i setup
- `podstawy` - Podstawowe koncepty
- `zaawansowane` - Zaawansowane tematy
- `debugowanie` - Rozwiązywanie problemów
- `optymalizacja` - Poprawa wydajności
- `integracja` - Łączenie z innymi narzędziami
- `testy` - Testowanie i walidacja

---

## Przykład Szybkiego Dodania

Jeśli chcesz szybko dodać eksperyment, powiedz mi:

```
Dodaj eksperyment #002 o nazwie "Testowanie konfiguracji API".
Przetestowałem różne ustawienia timeout i odkryłem, że 30 sekund
to optymalna wartość. Używaj tagów: testy, konfiguracja.
```

I zrobię wszystko za Ciebie! 🦜

---

## Publikacja na GitHub

Po dodaniu nowych eksperymentów:

```bash
cd /Users/parrotsclaw/Documents/openclaw-website
git add .
git commit -m "Dodano eksperyment #002"
git push
```

Twoja strona zaktualizuje się automatycznie! 🚀

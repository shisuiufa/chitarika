# Читарика

Образовательное приложение для тренировки чтения на русском языке. Подходит для детей и начинающих читателей: от отдельных слогов до коротких текстов.

Доступно как веб-приложение (Vite) и как десктопное приложение (Electron, полноэкранный режим).

## Возможности

- **4 уровня чтения:** слоги, слова, предложения, тексты
- **3 уровня сложности:** легко, средне, сложно
- **Настройка количества заданий** в одной сессии через кнопки и шкалу выбора
- **Экран результатов:** время, скорость чтения, количество прочитанных единиц
- **История заданий** после прохождения
- **Адаптивная вёрстка** под полноэкранный режим (1920×1080)

## Стек

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4
- Electron + electron-builder
- Vitest

## Требования

- Node.js 20+
- npm

## Установка

```bash
npm install
```

## Разработка

### Веб-версия

```bash
npm run dev
```

Приложение откроется на `http://localhost:5173`.

### Electron (dev)

В одном терминале:

```bash
npm run dev
```

В другом:

```bash
npm run electron
```

## Сборка

### Веб

```bash
npm run build
npm run preview
```

### Десктоп (Windows)

```bash
npm run dist
```

Собранный установщик появится в папке `dist/` (NSIS, Windows).

## Скрипты

| Команда             | Описание                      |
| ------------------- | ----------------------------- |
| `npm run dev`       | Dev-сервер Vite               |
| `npm run build`     | Production-сборка             |
| `npm run preview`   | Просмотр production-сборки    |
| `npm run electron`  | Запуск Electron (нужен `dev`) |
| `npm run dist`      | Сборка десктопного приложения |
| `npm run test`      | Запуск тестов (Vitest)        |
| `npm run typecheck` | Проверка типов TypeScript     |
| `npm run lint`      | ESLint                        |
| `npm run lint:fix`  | ESLint с автоисправлением     |
| `npm run format`    | Prettier                      |

## Структура проекта

```
src/
├── app/                    # Сборка приложения: реестр и root модалок
├── features/
│   ├── game/               # Игра: UI, логика, контент
│   │   ├── components/     # Экраны и компоненты
│   │   ├── data/           # Задания (слоги, слова, предложения, тексты)
│   │   ├── model/          # Controller, reducer, утилиты чтения
│   │   └── constants/      # Уровни, сложность, экраны
│   └── app-exit/           # Выход из Electron-приложения
├── shared/                 # UI-компоненты, иконки, утилиты, modal-provider
└── assets/                 # Шрифты, стили, изображения

electron/
├── main.js                 # Главный процесс Electron
└── preload.js              # IPC-мост для выхода из приложения
```

## Добавление контента

Задания лежат в `src/features/game/data/`:

```
data/
├── syllables/   # easy.ts, medium.ts, hard.ts
├── words/
├── sentences/
└── texts/
```

Каждый файл экспортирует группу заданий:

```ts
export const syllableEasyGroup = {
  id: "syllables-easy",
  level: LEVELS.Syllables,
  difficulty: DIFFICULTIES.Easy,
  tasks: [
    { id: "syllable-easy-1", value: "ма" },
    { id: "syllable-easy-2", value: "мо" },
    // ...
  ],
};
```

Текстовые значения должны быть обычными строками без служебной разметки.

## Горячие клавиши (Electron)

| Клавиша | Действие              |
| ------- | --------------------- |
| `Esc`   | Модальное окно выхода |

## Лицензия

Private project.

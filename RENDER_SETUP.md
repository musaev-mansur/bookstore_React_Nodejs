# Настройка Render для Web Service (Node.js сервер)

## Настройки в Render Dashboard

### Build & Deploy

**Build Command:**
```
npm install
```

**Start Command:**
```
node server/index.js
```

### Environment Variables (Environment)

Добавьте в раздел **Environment** следующие переменные:

1. **emailUser** - ваш Gmail адрес
   ```
   emailUser=your-email@gmail.com
   ```

2. **emailPass** - пароль приложения Gmail (не обычный пароль!)
   ```
   emailPass=your-app-password
   ```

### Как получить App Password для Gmail:

1. Включите двухфакторную аутентификацию в Google аккаунте
2. Перейдите: https://myaccount.google.com/apppasswords
3. Создайте новый пароль приложения для "Mail"
4. Используйте этот пароль в переменной `emailPass`

### Важные замечания:

- Render автоматически устанавливает переменную `PORT` - сервер использует её
- Если порт не указан, используется 3001 по умолчанию
- CORS настроен для работы с фронтендом
- Сервер обрабатывает POST запросы на `/send_email`

### Проверка работы:

После деплоя проверьте:
```
https://taymaskha.onrender.com/send_email
```

Должен вернуть ошибку метода (405), что означает что сервер работает, но нужен POST запрос.


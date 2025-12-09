# Настройка iframe для taymaskha_3D (musaev.it)

## Для разработки (Vite Dev Server)

Настройка уже добавлена в `vite.config.ts`:
- Заголовок `Content-Security-Policy` установлен для dev и preview серверов
- Разрешает встраивание только с `https://musaev.it` и `https://www.musaev.it`

## Для Production (Статический хостинг)

### Вариант 1: Netlify

Создайте файл `netlify.toml` в корне проекта:

```toml
[[headers]]
  for = "/*"
  [headers.values]
    Content-Security-Policy = "frame-ancestors 'self' https://musaev.it https://www.musaev.it;"
```

### Вариант 2: Vercel

Создайте файл `vercel.json` в корне проекта:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Content-Security-Policy",
          "value": "frame-ancestors 'self' https://musaev.it https://www.musaev.it;"
        }
      ]
    }
  ]
}
```

### Вариант 3: Nginx

Если используете Nginx для статического хостинга, добавьте в конфигурацию:

```nginx
server {
    listen 80;
    listen 443 ssl;
    server_name your-domain.com;
    
    root /path/to/dist;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
        
        # Разрешаем iframe только с musaev.it
        add_header Content-Security-Policy "frame-ancestors 'self' https://musaev.it https://www.musaev.it;";
    }
}
```

### Вариант 4: Apache

Если используете Apache, добавьте в `.htaccess` в папке `dist`:

```apache
<IfModule mod_headers.c>
    Header set Content-Security-Policy "frame-ancestors 'self' https://musaev.it https://www.musaev.it;"
</IfModule>
```

### Вариант 5: GitHub Pages / Статический хостинг без контроля заголовков

Если у вас нет доступа к настройке заголовков сервера, можно использовать meta тег в `index.html` (менее надежно, но лучше чем ничего):

```html
<meta http-equiv="Content-Security-Policy" content="frame-ancestors 'self' https://musaev.it https://www.musaev.it;">
```

**Примечание**: Meta тег работает не во всех браузерах, предпочтительнее использовать HTTP заголовки.

## Проверка работы

После деплоя проверьте заголовки:

```bash
curl -I https://your-domain.com
```

Должен быть заголовок:
```
Content-Security-Policy: frame-ancestors 'self' https://musaev.it https://www.musaev.it;
```

Или в браузере:
1. Откройте DevTools (F12)
2. Network → выберите любой запрос
3. Проверьте Response Headers → `Content-Security-Policy`

## Тестирование

1. Откройте https://musaev.it
2. Попробуйте встроить сайт в iframe:
```html
<iframe src="https://your-domain.com" width="100%" height="600"></iframe>
```
3. Должно работать без ошибки "Refused to display"

## Важные замечания

1. **HTTPS обязателен** - CSP работает только с HTTPS
2. После изменения настроек **перезапустите сервер** или **пересоберите проект**
3. Если используете CDN (Cloudflare и т.д.), настройте заголовки там тоже
4. Для локальной разработки заголовки уже настроены в `vite.config.ts`


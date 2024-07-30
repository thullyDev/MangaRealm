<h1 align="center">
MangaRealm
</h1>

<p align="center">
  <a href="#"><img src="https://img.shields.io/badge/typescript-%23007acc.svg?style=for-the-badge&logo=typescript&logoColor=%23ffffff"/></a>
  <a href="#"><img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/></a>
  <a href="#"><img src="https://img.shields.io/badge/vite-%239269fe.svg?style=for-the-badge&logo=vite&logoColor=yellow&border"/></a>
<a href="#">
  <img src="https://img.shields.io/badge/tailwindcss-%2306B6D4.svg?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS Badge"/>
</a>
<a href="#">
  <img src="https://img.shields.io/badge/astro-%23000000.svg?style=for-the-badge&logo=astro&logoColor=%23FF5D01" alt="Astro JS Badge"/>
</a>
</p>

<p align="center">
  <a href="#"><img src="https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=node.js&logoColor=white"/></a>
<a href="#">
  <img src="https://img.shields.io/badge/fastapi-009688.svg?style=for-the-badge&logo=fastapi&logoColor=white" alt="FastAPI Badge"/>
</a>
<a href="#">
  <img src="https://img.shields.io/badge/django-092E20.svg?style=for-the-badge&logo=django&logoColor=white" alt="Django Badge"/>
</a>
</p>

<p align="center">
	logo here
</p>

## What is MangaRealm?

Welcome to **MangaRealm** - your ultimate Manga destination! 🤯 Explore **[MangaRealm](https://www.render.mangarealm.com)** and dive into the world of anime

Crafted with using **Astro, React** and **Vite** as the frontend and backend is crafted with **Django and Fastapi** , our site rocks a slick and modern interface. Experience blazing-fast performance and smooth navigation as you explore a vast collection of manga, manhwa and manhua titles.



<!-- ## Features 🪴 -->

## Images

<div style="text-align: left;">
  <img src="https://raw.githubusercontent.com/Miruro-no-kuon/.github/main/profile/home-page.webp" alt="Home Page" style="max-width: 70%;" >
  <details>
  <summary>Screenshots [View More]</summary>
  <br>
  <img src="https://raw.githubusercontent.com/Miruro-no-kuon/.github/main/profile/splash-page.webp" alt="Splash Page" style="max-width: 70%;">
  <img src="https://raw.githubusercontent.com/Miruro-no-kuon/.github/main/profile/watch-page.webp" alt="Watch Page" style="max-width: 70%;">
  <img src="https://raw.githubusercontent.com/Miruro-no-kuon/.github/main/profile/footer.webp" alt="Footer" style="max-width: 70%;">
  </details>
</div>

## Installation and Local Development 💻

#### Clone these repos 

##### MangaRealm site

```bash
git clone https://github.com/thullyDev/MangaRealm.git

cd MangaRealm.git

touch .env

npm install 

npm run dev
```

###### .env (change accordingly)

```
MANGA_API_URL=http://127.0.0.1:8001/manga
BACKEND_API_URL=http://127.0.0.1:8000/api
AUTH_API_URL=http://127.0.0.1:8002/auth
SQL_URL=postgresql://username:password@host:port/databasename
REDIS_URL=redis://host:port
DISQUS_URL=DISQUS_JS_URL
DOMAIN_ORIGIN=http://localhost:4321
SITE_KEY=YOUR_SITE_KEY
```


##### MangaRealm api

```bash
git clone https://github.com/thullyDev/MangaRealm.api.git

cd MangaRealm.api

touch .env

pip install -r requirements.txt

python -m venv env

uvicorn app.main:app --reload --port 8000
```

###### .env (change accordingly)

```
MANGANATO_API_URL=http://127.0.0.1:8001/manga
SQL_URL=postgresql://username:password@host:port/databasename
REDIS_URL=redis://host:port
ORIGINS=*
IMAGEKIT_PUBLIC_KEY=****
IMAGEKIT_PRIVATE_KEY=****
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/IMAGEKIT_ID
```

##### MangaNato api

```bash
git clone https://github.com/thullyDev/MangaNato.api.git

cd MangaNato.api

pip install -r requirements.txt

python -m venv env

uvicorn app.main:app --reload --port 8001
```

##### Authenticator api

```bash
git clone https://github.com/thullyDev/Authenticator.api.git

cd Authenticator.api

touch .env

pip install -r requirements.txt

python -m venv env

uvicorn app.main:app --reload --port 8002
```

###### .env (change accordingly)
```
SQL_URL=postgresql://username:password@host:port/databasename
EMAIL=****
EMAIL_PASS=****
SITE_NAME=MangaRealm
RENEW_PASSWORD_LINK=http://localhost:4321/renew_password
REDIS_URL=redis://127.0.0.1:6379
ORIGINS=http://localhost
REDIRECT_LINK=http://localhost:4321/auth/verify
```

##### MangaRealm Admin Panel

```bash
git clone https://github.com/thullyDev/MangaRealmAdmin.git

cd MangaRealmAdmin

touch .env

pip install -r requirements.txt

python -m venv env

python manage.py runserver 127.0.0.1:8003
```

###### .env (change accordingly)
```
SQL_URL=postgresql://username:password@host:port/databasename
REDIS_URL=redis://127.0.0.1:6379
SITE_KEY=YOUR_SITE_KEY
IMAGEKIT_ID=****
IMAGEKIT_PUBLIC_KEY=****
IMAGEKIT_PRIVATE_KEY=****
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/IMAGEKIT_ID
DEBUG=True
MANGA_API_URL=http://127.0.0.1:8001/manga
SITE=http://localhost:4321
```





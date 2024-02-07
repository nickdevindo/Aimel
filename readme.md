# Chats-simSimi


![nickdev](img/nickdev2.jpg)

<br><br>

---

[![Node.js Package](https://github.com/srart24/chats-simsimi/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/srart24/chats-simsimi/actions/workflows/npm-publish.yml)
[![npm version](https://badge.fury.io/js/chats-simsimi.svg)](https://www.npmjs.com/package/chats-simsimi)

---

> Chats Amelia adalah modul yang memungkinkan Anda berinteraksi dengan bot Amelia untuk percakapan yang menyenangkan.

---

## Instalasi

Anda dapat menginstal modul ini melalui npm. Pastikan Anda memiliki Node.js terpasang di sistem Anda sebelum melanjutkan.

```bash
npm install chats-amelia

```

## import module
``` js

const amelia = require('chats-amelia')

```

---

#### `amelia(message, language)`

Fungsi ini mengirim pesan ke Amelia dan mengembalikan respons.

**Parameter:**

- `message` (string): Pesan yang akan dikirim ke Amelia.
- `language` (string): Bahasa percakapan dengan Amelia. 



##### Bahasa yang Di Dukung

---

| Language                   | Code  |
|-------------------------|-------|
| Vietnam           | vn    |
| Inggris (English) | en    |
| Ibrani (Hebrew)   | he    |
| Tionghoa (Chinese)| zh    |
| Indonesia         | id    |
| Korea             | ko    |
| Filipina (Filipino)| ph   |
| Rusia (Russian)   | ru    |
| Arab              | ar    |
| Melayu (Malay)    | ms    |
| Spanyol (Spanish) | es    |
| Portugis (Portuguese) | pt |
| Jerman (German)   | de    |
| Thailand (Thai)   | th    |
| Jepang (Japanese) | ja    |
| Prancis (French)  | fr    |
| Swedia (Swedish)  | sv    |
| Turki (Turkish)   | tr    |
| Denmark (Danish)  | da    |
| Norwegia Bokmål (Norwegian Bokmål) | nb |
| Italia (Italian)  | it    |
| Belanda (Dutch)   | nl    |
| Finlandia (Finnish) | fi   |
| Malayalam         | ml    |
| Hindi             | hi    |
| Khmer             | kh    |
| Katalan (Catalan) | ca    |
| Tamil             | ta    |
| Serbia            | rs    |
| Mongolia          | mn    |
| Persia (Persian)  | fa    |
| Punjabi           | pa    |
| Wales (Welsh)     | cy    |
| Kroasia (Croatian)| hr    |
| Yunani (Greek)    | el    |
| Azerbaijan        | az    |
| Swahili           | sw    |

---

## Penggunaan

Berikut adalah contoh penggunaan dasar modul ini:

``` js

const amelia = require('chats-amelia');

// Mengirim pesan ke Amelia
amelia('Halo, apa kabar?', 'id')
  .then(response => {
    console.log('Amelia:', response);
  })
  .catch(error => {
    console.error('Terjadi kesalahan:', error);
  });

```

### Response
``` js
Amelia: {
  status: true,
  creator: '@nickdev',
  result: 'Baik kak. Kakak bagaimana?'
}
```

---


## Lisensi

 [MIT LISENSI](LICENSE)


---



## Author

---

| <img src="https://telegra.ph/file/82755be5642a0a6854d0e.jpg" width="70" height="70"> |
| :---: |
| [nickdev](https://instagram.com/ghostsecr) |

---



<!-- PROJECT SHIELDS -->
[![Build Status][build-shield]]()
[![Contributors][contributors-shield]]()
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/Alertis/memorize">
    <h3></h3>
  </a>

  <h3 align="center">Memorize</h3>

  <p align="center">
    Celal Bayar Üniversitesi Yazılım Yapımı Projesi için React Native ile hazırlanan kelime ezberleme yazılımı.
    <br />
    ·
    <a href="https://github.com/Alertis/memorize/issues">Report Bug</a>
    ·
    <a href="https://github.com/Alertis/memorize/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## İçerik

* [Proje Hakkında](#proje-hakkında)
  * [Kullanılan Paketler](#kullanılan-paketler)
* [Başlangıç](#başlangıç)
  * [Gereksinimler](#gereksinimler)
  * [Kurulum](#kurulum)
* [Kullanımı](#kullanımı)
* [İletişim](#iletişim)



<!-- ABOUT THE PROJECT -->
## Proje Hakkında

[![Product Name Screen Shot][product-screenshot-1]](https://github.com/Alertis/memorize/tree/master/screenshots)

Uygulama kullanıcılara öğrenmek istediği kelimelerin ingilizce karşılığını öğretmeyi amaçlamaktadır. Uygulama ilk çalıştırıldığı zaman daha önceden belirlenen bir miktar kelimeyi otomatik olarak hafızasına dahil eder. Kullanıcı daha sonra kelime ekleyebilir veya öğrenmek istediği kelimeyi işaretleyebilir. Öğrenmek üzere işaretlenen kelimeler belirli bir senaryoya göre günü geldiği zaman TEST menüsü altında görüntülenecektir.

### Kullanılan Paketler
Uygulama geliştirme sırasında aşağıdaki paketlerden yararlanılmıştır.
* [React Native](https://facebook.github.io/react-native/)
* [React Native Router Flux](https://github.com/aksonov/react-native-router-flux)
* [React Native Sqlite Storage](https://github.com/andpor/react-native-sqlite-storage)
* [React Native Flash Message](https://github.com/lucasferreira/react-native-flash-message)
* [Native Base](https://nativebase.io/)
* [Moment](https://www.npmjs.com/package/moment)



<!-- GETTING STARTED -->
## Başlangıç

Projeyi kendi bilgisayarınıza kurmak için aşağıdaki adımları takip edebilirsiniz.

### Gereksinimler

Projeyi çalıştırabilmek için aşağıdaki paketleri yüklemeniz gerekmekte
* npm
```sh
npm install npm@latest -g
```
* React Native
```sh
npm install -g react-native-cli
```

### Kurulum

1. Github reposunu klonlayın
```sh
git clone https://github.com/Alertis/memorize
```
2. NPM paketlerini kurun
```sh
npm install
```



<!-- USAGE EXAMPLES -->
## Kullanımı

Uygulama ilk açıldığı zaman telefona bir SQLite veritabanı oluşturmaktadır. Aynı zamanda hafızasındaki belli sayıdaki kelimeyi bu veritabanına kayıt etmektedir. Kullanıcı dilerse yeni kelime ekleyebilir, eklenen kelimeleri düzenleyebilir veya eklenen kelimeleri silebilir. <br/>

Kullanıcı öğrenmek istediği kelimeyi işaretleyerek aşağıdaki senaryoya göre TEST sayfasında görüntülenmesini sağlayabilir.

* Kelime öğrenilmek üzere işaretlenir.
* İşaretlenen kelime işaretlendiği günden bir gün sonra kullanıcıya sorulur.
* Eğer kelime doğru cevaplandıysa bir sonraki aşamaya geçilir.
* Yanlış cevaplandıysa ilk aşamaya geri dönülür.

Aşamalar

1. Aşama kelime öğrenilmek üzere işaretlendiği günden bir gün sonra kullanıcıya sorulur.
2. Aşama kelime öğrenilmek üzere işaretlendiği günden bir hafta sonra kullanıcıya sorulur.
3. Aşama kelime öğrenilmek üzere işaretlendiği günden bir ay sonra kullanıcıya sorulur.
3. Aşama kelime öğrenilmek üzere işaretlendiği günden altı ay sonra kullanıcıya sorulur.


<!-- CONTACT -->
## Iletişim

Osman Yavuz Demir - [@alertisx](https://twitter.com/Alertisx) - osmanyavuzdemir96@gmail.com

Proje Linki: [https://github.com/Alertis/memorize](https://github.com/Alertis/memorize)








<!-- MARKDOWN LINKS & IMAGES -->
[build-shield]: https://img.shields.io/badge/build-passing-brightgreen.svg?style=flat-square
[contributors-shield]: https://img.shields.io/badge/contributors-1-orange.svg?style=flat-square
[license-shield]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license-url]: https://choosealicense.com/licenses/mit
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/osmanyavuzdemir/
[product-screenshot-1]: https://raw.githubusercontent.com/Alertis/memorize/master/screenshots/1.png?token=AG2ZA5TXLJQRPKPWLZNTTXC43FKJU

<p align='center'>
<img alt='BHappy Logo' src='https://github.com/gstvds/happy/blob/master/web/src/images/logo.svg'>
</p>

- Happy is an application to help people find orphanages nearby
- This project is a result of Next Level Week #3 (presented by [Rocketseat][rocket])

<p align="center">
          <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/gstvds/happy.svg">
          <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/gstvds/happy.svg">
          <img alt="Repository size" src="https://img.shields.io/github/repo-size/gstvds/happy.svg">
       <a href="https://github.com/gstvds/happy/commits/master">
          <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/gstvds/happy.svg">
       </a>
</p>

<p align="center">
  <a href="#rocket-build-stack">Build Stack</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#wrench-how-to-run">How to Run</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

## :rocket: Build Stack

- [NodeJS][nodejs]
- [TypeORM][typeorm]
- [ReactJS][reactjs]
- [Expo][expo]

## :wrench: How to Run

Clone this repository
```bash
$ git clone git@github.com:gstvds/happy.git
```

Enter the backend folder and install its dependencies
```bash
$ cd happy/backend
$ yarn
```

Enter the web folder and install its dependencies
```bash
$ cd happy/web
$ yarn
```

Enter the mobile folder and install its dependencies
```bash
$ cd happy/mobile
$ yarn
```

### Running the server
Go to the backend folder and run the migrations
```bash
$ yarn typeorm migrations:run
```

Then start the server
```bash
$ cd happy/backend
$ yarn dev
```

### Running the web or mobile abb
Go to its folder and start the bundler
```bash
$ cd happy/web
```
or
```bash
$ cd happy/mobile
```

then
```bash
$ yarn start
```

## :memo: License

This project is under MIT License. Check the [LINCESE](https://github.com/gstvds/happy/blob/master/LICENSE.txt) for more information.

---

[nodejs]: https://nodejs.org/
[typeorm]: https://typeorm.io/
[yarn]: https://yarnpgk.com/
[reactjs]: https://reactjs.org/
[expo]: https://expo.io/
[rocket]: https://rocketseat.com.br

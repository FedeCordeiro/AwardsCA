import { Component } from '@angular/core';

@Component({
  selector: 'app-picantes',
  templateUrl: './picantes.component.html',
  styleUrls: ['./picantes.component.css']
})
export class PicantesComponent {
  selectedCategory: string = 'Streamers del año';

  streamers = [
    {
      year: 2018,
      streamerName: "Frankkaster",
      realName: "Francisco Postiglione",
      image: "../../../assets/img/picantes/año/frankkaster-1.webp",
      category: 'Streamers del año' 
    },
    {
      year: 2019,
      streamerName: "Grafo",
      realName: "Nicolás Graffigna",
      image: "../../../assets/img/picantes/año/grafo.jpg_large",
      category: 'Streamers del año' 
    },
    {
      year: 2020,
      streamerName: "Pimpeano",
      realName: "Galo Blasco",
      image: "../../../assets/img/picantes/año/pimpeano.jpg",
      category: 'Streamers del año' 
    },
    {
      year: 2021,
      streamerName: "Momo",
      realName: "Gerónimo Benavides",
      image: "../../../assets/img/picantes/año/momo.webp",
      category: 'Streamers del año' 
    },
    {
      year: 2022,
      streamerName: "Spreen",
      realName: "Ivan Buhajeruk",
      image: "../../../assets/img/picantes/año/spreen.avif",
      category: 'Streamers del año' 
    },
    {
      year: 2023,
      streamerName: "DavooXeneize",
      realName: "David Quint",
      image: "../../../assets/img/picantes/año/davoo.jpg",
      category: 'Streamers del año' 
    },
    {
      year: 2019,
      streamerName: "Mili",
      realName: "Milagros Mansilla",
      image: "../../../assets/img/picantes/promesa/mili.jpeg",
      category: 'Streamers promesa' 
    },
    {
      year: 2020,
      streamerName: "Francobertello74",
      realName: "Franco Bertello",
      image: "../../../assets/img/picantes/promesa/francobertello.jpeg",
      category: 'Streamers promesa' 
    },
    {
      year: 2021,
      streamerName: "Baldu",
      realName: "Matias Balduzzi",
      image: "../../../assets/img/picantes/promesa/baldu.jpeg",
      category: 'Streamers promesa' 
    },
    {
      year: 2022,
      streamerName: "LaAgusneta",
      realName: "Agustín Rodríguez",
      image: "../../../assets/img/picantes/promesa/la-agusneta-1.webp",
      category: 'Streamers promesa' 
    },
    {
      year: 2023,
      streamerName: "Chinassj",
      realName: "Valentina Solorza",
      image: "../../../assets/img/picantes/promesa/chinassj.jpg",
      category: 'Streamers promesa' 
    },
    {
      year: 2018,
      streamerName: "Zeko",
      realName: "Federico Cristalino",
      image: "../../../assets/img/picantes/revelacion/zeko.jpg",
      category: 'Streamers revelación' 
    },
    {
      year: 2019,
      streamerName: "Nano",
      realName: "Marianos Nicolas",
      image: "../../../assets/img/picantes/revelacion/nano.webp",
      category: 'Streamers revelación' 
    },
    {
      year: 2020,
      streamerName: "Brunenger",
      realName: "Bruno Kruszyn",
      image: "../../../assets/img/picantes/revelacion/brunenger.webp",
      category: 'Streamers revelación' 
    },
    {
      year: 2021,
      streamerName: "Spreen",
      realName: "Ivan Buhajeruk",
      image: "../../../assets/img/picantes/revelacion/spreen.avif",
      category: 'Streamers revelación' 
    },
    {
      year: 2022,
      streamerName: "DavooXeneize",
      realName: "David Quint",
      image: "../../../assets/img/picantes/revelacion/davoo.jpg",
      category: 'Streamers revelación' 
    },
    {
      year: 2023,
      streamerName: "Mazza",
      realName: "Tomas Mazza",
      image: "../../../assets/img/picantes/revelacion/mazza.jpeg",
      category: 'Streamers revelación' 
    },
    {
      year: 2018,
      streamerName: "Hastad",
      realName: "Hernán Klingler",
      image: "../../../assets/img/picantes/trayectoria/hastad.webp",
      category: 'Trayectoria' 
    },
    {
      year: 2019,
      streamerName: "Duende",
      realName: "Pablo Ballon",
      image: "../../../assets/img/picantes/trayectoria/duende.jpg",
      category: 'Trayectoria' 
    },
    {
      year: 2020,
      streamerName: "Darkoz",
      realName: "Lucas Ledesma",
      image: "../../../assets/img/picantes/trayectoria/darkoz.jpeg",
      category: 'Trayectoria' 
    },
    {
      year: 2021,
      streamerName: "Unicornio",
      realName: "German Usinger",
      image: "../../../assets/img/picantes/trayectoria/unicornio.jpeg",
      category: 'Trayectoria' 
    },
    {
      year: 2022,
      streamerName: "Zeko",
      realName: "Federico Cristalino",
      image: "../../../assets/img/picantes/trayectoria/zeko.jpg",
      category: 'Trayectoria' 
    },
    {
      year: 2023,
      streamerName: "Luchi",
      realName: "Lucia Quinteros",
      image: "../../../assets/img/picantes/trayectoria/luchi.jpeg",
      category: 'Trayectoria' 
    },
    {
      year: 2018,
      streamerName: "Frankkaster",
      realName: "Francisco Postiglione",
      image: "../../../assets/img/picantes/irl/frankkaster-1.webp",
      category: 'Mejor streamer IRL' 
    },
    {
      year: 2019,
      streamerName: "Goncho",
      realName: "Gonzalo Banzas",
      image: "../../../assets/img/picantes/irl/goncho.jpeg",
      category: 'Mejor streamer IRL' 
    },
    {
      year: 2020,
      streamerName: "Brunenger",
      realName: "Bruno Kruszyn",
      image: "../../../assets/img/picantes/irl/brunenger-12.webp",
      category: 'Mejor streamer IRL' 
    },
    {
      year: 2021,
      streamerName: "Luquitas",
      realName: "Lucas Rodríguez",
      image: "../../../assets/img/picantes/irl/rodriguez-luquitas-image.jpg",
      category: 'Mejor streamer IRL' 
    },
    {
      year: 2022,
      streamerName: "Carrera",
      realName: "Rodrigo Carrera",
      image: "../../../assets/img/picantes/irl/carrera.jpg",
      category: 'Mejor streamer IRL' 
    },
    {
      year: 2023,
      streamerName: "Santutu",
      realName: "Santiago Rodríguez",
      image: "../../../assets/img/picantes/irl/santutu.jpg",
      category: 'Mejor streamer IRL' 
    }
  ];

  getFilteredStreamers(): any[] {
    return this.streamers.filter(streamer => streamer.category === this.selectedCategory);
  }
}

# imdb-api
This aws lamdba function extracts the json data in an imdb webpage and returns it

#Example Response
```
{
  "statusCode": 200,
  "body": {
    "@context": "http://schema.org",
    "@type": "Movie",
    "url": "/title/tt4154756/",
    "name": "Avengers: Infinity War",
    "image": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg",
    "genre": [
      "Action",
      "Adventure",
      "Fantasy",
      "Sci-Fi"
    ],
    "contentRating": "PG-13",
    "actor": [
      {
        "@type": "Person",
        "url": "/name/nm0000375/",
        "name": "Robert Downey Jr."
      },
      {
        "@type": "Person",
        "url": "/name/nm1165110/",
        "name": "Chris Hemsworth"
      },
      {
        "@type": "Person",
        "url": "/name/nm0749263/",
        "name": "Mark Ruffalo"
      },
      {
        "@type": "Person",
        "url": "/name/nm0262635/",
        "name": "Chris Evans"
      }
    ],
    "director": [
      {
        "@type": "Person",
        "url": "/name/nm0751577/",
        "name": "Anthony Russo"
      },
      {
        "@type": "Person",
        "url": "/name/nm0751648/",
        "name": "Joe Russo"
      }
    ],
    "creator": [
      {
        "@type": "Person",
        "url": "/name/nm1321655/",
        "name": "Christopher Markus"
      },
      {
        "@type": "Person",
        "url": "/name/nm1321656/",
        "name": "Stephen McFeely"
      },
      {
        "@type": "Person",
        "url": "/name/nm0498278/",
        "name": "Stan Lee"
      },
      {
        "@type": "Person",
        "url": "/name/nm0456158/",
        "name": "Jack Kirby"
      },
      {
        "@type": "Person",
        "url": "/name/nm0800209/",
        "name": "Joe Simon"
      },
      {
        "@type": "Person",
        "url": "/name/nm0456158/",
        "name": "Jack Kirby"
      },
      {
        "@type": "Person",
        "url": "/name/nm1921680/",
        "name": "Steve Englehart"
      },
      {
        "@type": "Person",
        "url": "/name/nm3238648/",
        "name": "Steve Gan"
      },
      {
        "@type": "Person",
        "url": "/name/nm2757098/",
        "name": "Bill Mantlo"
      },
      {
        "@type": "Person",
        "url": "/name/nm0317493/",
        "name": "Keith Giffen"
      },
      {
        "@type": "Person",
        "url": "/name/nm4160687/",
        "name": "Jim Starlin"
      },
      {
        "@type": "Person",
        "url": "/name/nm0498278/",
        "name": "Stan Lee"
      },
      {
        "@type": "Person",
        "url": "/name/nm1293367/",
        "name": "Larry Lieber"
      },
      {
        "@type": "Person",
        "url": "/name/nm0456158/",
        "name": "Jack Kirby"
      },
      {
        "@type": "Person",
        "url": "/name/nm1921680/",
        "name": "Steve Englehart"
      },
      {
        "@type": "Person",
        "url": "/name/nm1411347/",
        "name": "Don Heck"
      },
      {
        "@type": "Person",
        "url": "/name/nm4160687/",
        "name": "Jim Starlin"
      },
      {
        "@type": "Organization",
        "url": "/company/co0051941/"
      },
      {
        "@type": "Organization",
        "url": "/company/co0265297/"
      },
      {
        "@type": "Organization",
        "url": "/company/co0713020/"
      }
    ],
    "description": "Avengers: Infinity War is a movie starring Robert Downey Jr., Chris Hemsworth, and Mark Ruffalo. The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of...",
    "datePublished": "2018-04-25",
    "keywords": "death of recurring character,supervillain,superhero,ensemble cast,iron man character",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingCount": 524072,
      "bestRating": "10.0",
      "worstRating": "1.0",
      "ratingValue": "8.5"
    },
    "review": {
      "@type": "Review",
      "itemReviewed": {
        "@type": "CreativeWork",
        "url": "/title/tt4154756/"
      },
      "author": {
        "@type": "Person",
        "name": "blparker-31738"
      },
      "dateCreated": "2018-04-27",
      "inLanguage": "English",
      "name": "The amount of people that don't understand the movie is astonishing",
      "reviewBody": "All the reviews that say this movie has no plot are either trolls, idiots, or didn't are to take the time to watch previous marvel movies. Every single one of those ratings and reviews should be taken down and not added to the rating for Infinity War because of their fundamental lack of understanding. It's like coming in and watching the last 2 minutes of an hour long drama show and saying this episode sucks because it has no plot. It's utterly ridiculous!\n\nThere have been 31 marvel movies leading up to this point. All 31 has have some plot that leads to infinity war. Infinity War IS the end game movie. There is nothing left to explain, nothing left to discuss, it is all-out fight for control of the most powerful items in existence, the infinity stones. There have been 31 movies to explain in someway the power of these stones and/or the heroes that come together to fight Thanos in this movie. It's like a long game of chess where Thanos finally makes his move, and it's a huge one.\n\nSo I beg of any of you who reads this. Don't listen to anyone who says this movie has no plot, has no reason and is only fighting. They aren't worth listening to, Infinity Wars has roughly 60 hours of plot from 31 precious movies leading up to this monumental fight for life or death, and the movie is done to near perfection. The movie is glorious, the CGI is fantastic, the battles are awe-inspiring, and Thanos is made worth of your fear from the very beginning. He is truly the Mad Titan that captures your heart and crushes it right in front of your eyes. Anyone who doesn't think this clearly didn't see the same movie.",
      "reviewRating": {
        "@type": "Rating",
        "worstRating": "1",
        "bestRating": "10",
        "ratingValue": "10"
      }
    },
    "duration": "PT2H29M",
    "trailer": {
      "@type": "VideoObject",
      "name": "Chant TV Spot",
      "embedUrl": "/video/imdb/vi528070681",
      "thumbnail": {
        "@type": "ImageObject",
        "contentUrl": "https://m.media-amazon.com/images/M/MV5BYjJiZTcxYzEtODFlZi00M2UzLTg5NTgtYWMxMGNkMWJiNmRjXkEyXkFqcGdeQXBrZWVzZXk@._V1_.jpg"
      },
      "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BYjJiZTcxYzEtODFlZi00M2UzLTg5NTgtYWMxMGNkMWJiNmRjXkEyXkFqcGdeQXBrZWVzZXk@._V1_.jpg",
      "description": "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
      "uploadDate": "2018-04-07T17:15:55Z"
    }
  }
}
```
#Paramters
Currently it only takes in one parameter, the IMDB ID. 
```
{
  "imdbId": "tt4154756"
}
```



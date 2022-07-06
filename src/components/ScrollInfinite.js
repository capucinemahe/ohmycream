import React from "react";
import { useEffect, useState, useRef } from "react";
import "../styles/ScrollInfinite.css";

export default function ScrollInfinite() {
  //stocker les images :
  const [dataImg, setDataImg] = useState([[], [], []]);
  //pour faire du scroll infini:
  const [pageIndex, setPageIndex] = useState(1);
  //chercher dans la barre de recherche :
  const [searchState, setSearchState] = useState("random");

  useEffect(() => {
    infiniteFetchData();
  }, [pageIndex]);
  //dès que pageIndex change, j'appelerai mon infiniteFetchData

  const inputRef = useRef();

  function infiniteFetchData() {
    fetch(
      `https://api.unsplash.com/search/photos?page=${pageIndex}&per_page=30&query=${searchState}&client_id=p9wdUU5aOIrC-fovEZRtnA52oZksdmvpylW5j_3kp2I`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);

        const imagesReceived = [];
        data.results.forEach((img) => {
          imagesReceived.push(img.urls.regular);
        });

        //pour ne pas supprimer les images précédentes quand on va scroller :
        const newFreshState = [
          [...dataImg[0]],
          [...dataImg[1]],
          [...dataImg[2]],
        ];

        let index = 0;
        for (let i = 0; i < 3; i++) {
          for (let j = 0; i < 10; j++) {
            newFreshState[i].push(imagesReceived[index]);
            index++;
          }
        }

        setDataImg(newFreshState);
      });
  }

  console.log(dataImg);

  return (
    <div className="container">
      Enlever auto-save quand on fait des appels à l'api (50 appels / heure)
      <form>
        <label htmlFor="search">Votre recherche</label>
        <input type="text" id="search" ref={inputRef} />

        <div className="card_list">
          <div>
            {dataImg[0].map((img) => {
              return <img src={img} />;
            })}
          </div>
          <div>
            {dataImg[1].map((img) => {
              return <img src={img} />;
            })}
          </div>
          <div>
            {dataImg[2].map((img) => {
              return <img src={img} />;
            })}
          </div>
        </div>
      </form>
    </div>
  );
}

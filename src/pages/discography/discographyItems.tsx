import { useState, useCallback, memo } from "react";
import * as C from "./style";
import { DiscographyList } from "./discographyList";
import AppStore from "./img/link-1.jpg";
import GooglePlay from "./img/link-2.jpg";

const Discography = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const item = DiscographyList;
  const itemsPerPage = 6;

  const pages = Math.ceil(item.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItem = item.slice(startIndex, endIndex);

  const handlePages = useCallback((updatePage: number) => {
    setCurrentPage(updatePage);
  }, []);

  const handleCurrentPage = useCallback((e: number) => {
    setCurrentPage(e);
  }, []);

  return (
    <C.DiscographyItems>
      <div className="discography__container">
        {currentItem.map((item) => {
          return (
            <figure key={item.id}>
              <img src={item.img} alt={`disco-${item.id}`} />

              <figcaption>
                <h2>{item.price}</h2>
                <p>{item.disco}</p>
                <div>
                  <button type="button">
                    <img src={AppStore} alt={`app-store-${item.id}`} />
                  </button>
                  <button type="button">
                    <img src={GooglePlay} alt={`google-play-${item.id}`} />
                  </button>
                </div>
              </figcaption>
            </figure>
          );
        })}
      </div>

      <div className="discography__pagination">
        <button
          onClick={() => handlePages(currentPage - 1)}
          disabled={currentPage < 1}
        >
          Prev
        </button>
        {Array.from(Array(pages), (item, index) => {
          return (
            <button
              value={index}
              className={`${
                index === currentPage ? "discography__active" : null
              }`}
              onClick={(e) =>
                handleCurrentPage(Number((e.target as HTMLButtonElement).value))
              }
              key={index}
            >
              {index + 1}
            </button>
          );
        })}
        <button
          onClick={() => handlePages(currentPage + 1)}
          disabled={currentPage === pages - 1}
        >
          Next
        </button>
      </div>
    </C.DiscographyItems>
  );
};

export const DiscographyItems = memo(Discography);

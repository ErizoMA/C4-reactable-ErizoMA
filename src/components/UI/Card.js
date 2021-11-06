/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext } from "react";
import { SessionContext } from "../../contexts/SessionContext";
import { CategoriesFetcher } from "../../services/categories_fetcher";

function Card({ id, category, count, total }) {
  const context = useContext(SessionContext);

  function deleteCard() {
    const newCategories = context.categories.filter((item) => item.id !== id);
    context.setCategories(newCategories);
    CategoriesFetcher.delete(context.token, id);
  }
  return (
    <div
      css={css`
        width: 150px;
        height: 192px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 16px;
        text-align: center;
        align-items: center;
        color: var(--gray-2);
        background: #ffffff;
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        .title {
          font-size: 18px;
          line-height: 24px;
        }
        .subtitle {
          font-size: 14px;
          line-height: 24px;
        }
        .total {
          font-size: 20px;
          line-height: 32px;
        }
        img {
          width: 24px;
          height: 24px;
        }
        .circle {
          height: 40px;
          width: 40px;
          border-radius: 50%;
          border: 1px solid var(--blue-1);
          display: grid;
          place-items: center;
          :hover {
            background: rgba(47, 128, 237, 0.1);
          }
        }
      `}
    >
      <div>
        <p className="title">{category}</p>
        <p className="subtitle">{`${count} transactions`}</p>
      </div>
      <p className="total">{`$ ${total}`}</p>
      <div className="circle">
        <img onClick={deleteCard} alt="" src="trash.svg" />
      </div>
    </div>
  );
}

export default Card;

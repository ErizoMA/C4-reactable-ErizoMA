/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Card({ category, count, total }) {
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
      `}
    >
      <div>
        <p className="title">{category}</p>
        <p className="subtitle">{`${count} transactions`}</p>
      </div>
      <p className="total">{`$ ${total}`}</p>
      <img alt="" src="trash.svg" />
    </div>
  );
}

export default Card;

import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

//memoで囲うことでpropsを変更しない限り際レンダリングしなくなる
//今後肥大化が予想されるコンポーネントは全てmemoで囲う
export const ChildArea = memo(({ open }) => {
  console.log("ChildAreaがレンダリングされた！");
  //2000件のデータを用意
  const data = [...Array(2000).keys()];

  data.forEach((element) => {
    console.log("...");
  });

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
        </div>
      ) : null}
    </>
  );
});

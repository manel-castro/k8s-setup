import Image from "next/image";

export const metadata = {
  title: "1test",
};

// export async function fetchData() {
//   return fetch("https://i.dummyjson.com/data/products/11/1.jpg").then(
//     async (res) => {
//       // const imageJSON = await res.json();
//       // return imageJSON;

//       const imageBlob = await res.blob();

//       return imageBlob;

//       const imageObjectURL = URL.createObjectURL(imageBlob);
//       return imageObjectURL;
//     }
//   );
// }

export default async function About({ params }: any) {
  // const imgBlob = await fetchData();
  console.log("something");

  // console.log(imgBlob);
  return (
    <div>
      <div>aboutid</div>
      <Image
        src={"https://i.dummyjson.com/data/products/11/1.jpg"}
        height={100}
        width={100}
        alt="Some"
      />
      {/* <Image src={imgBlob} height={100} width={100} alt="Some" /> */}
    </div>
  );
}

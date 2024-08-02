import { PhotosIndex } from "./PhotosIndex";

export function PhotosPage() {
  const photos = [
    {
      id: 1,
      title: "Amman",
      body: "Amman is the capital of Jordan.",
      image: "https://lp-cms-production.imgix.net/2023-03/shutterstockRF_759302734.jpg",
    },
    {
      id: 2,
      title: "Fuheis",
      body: "Fuheis is the village of my ancestors.",
      image: "https://live.staticflickr.com/65535/51939903886_b785b9d95e_h.jpg",
    },
    {
      id: 3,
      title: "Aqaba",
      body: "Aqaba is the only city in Jordan on the Red Sea.",
      image:
        "https://s7g10.scene7.com/is/image/accorhotels/GettyImages-1288858945:8by10?wid=412&hei=515&dpr=on,2.625&qlt=75&resMode=sharp2&op_usm=0.5,0.3,2,0&iccEmbed=true&icc=sRGB",
    },
  ];

  return (
    <main className="text-center">
      <PhotosIndex photos={photos} />
    </main>
  );
}

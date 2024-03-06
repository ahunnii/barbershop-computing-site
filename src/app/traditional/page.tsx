/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Card, CardContent } from "~/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";

const TraditionalPage = () => {
  const items = [
    {
      id: 1,
      src: "/img/slide4.png",
      alt: "...",
      description: `Karrayyu warriors in Ethiopia use butter to shape their styles.
        Their wealth is from cattle (the source of the butter). This
        ceremony ("Gada") rotates authority so that everyone shares
        power.`,
    },
    {
      id: 2,
      src: "/img/slide9.png",
      alt: "...",
      description: ` In 1879 the British were defeated by the Zulu, armed with little
        more than spears and tactical genius. By 1890 the Zulu had
        surrendered, but their dignity is still apparent in this photo
        from that time.`,
    },
    {
      id: 3,
      src: "/img/wrestlers10.jpg",
      alt: "...",
      description:
        "Wrestling (“Njom”) in Senegal is so important that we know the names of champions from the 14th century. Hair styles, powerful amulets and magical ointments are part of the tradition.",
    },
    {
      id: 4,
      src: "/img/slide-new-2.png",
      alt: "...",
      description:
        "This Namibian man's style indicates that he is not married. Once he is hitched, he will switch to a turban.",
    },
    {
      id: 5,
      src: "/img/slide-new-3.png",
      alt: "...",
      description:
        "The Karo of Ethiopia have lost much of their land to foreign investors. Their resistance includes keeping cultural innovation and style alive.",
    },
  ];
  return (
    <>
      <h1>Traditional Styles from Across Africa</h1>

      <p>
        The creativity, knowledge, and techniques of styling and cutting Black
        men&apos;s hair across the African continent are dynamic and noteworthy.
        For example, this traditional crest from Rwanda is called “Amasunzu”
        (Ah-mah-SOON-zoo). It symbolizes strength and bravery. Below is a video
        about a man who continues to wear this style to carry on his Indigenous
        heritage. Note what he says about high top fades: do you think he is
        right that they have roots from African styles like the Amasunzu?
      </p>

      <div className="flex flex-col  gap-4 lg:flex-row">
        <div className=" lg:w-3/12">
          <img
            src="/img/traditional-1.png"
            alt=""
            className="img-fluid rounded"
          />
          <p className="text-muted-foreground !mt-2  text-sm">
            A Wa Tutsi man of Rwanda with the Amasunzu hairstyle
          </p>
        </div>
        <div className=" lg:w-6/12">
          <video
            controls
            width="100%"
            className="d-block w-100 mx-auto"
            id="riseVideo"
          >
            <source src="/video/riseandshine.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className=" lg:w-3/12">
          <img
            src="/img/traditional-2.png"
            alt=""
            className="img-fluid rounded"
          />
          <p className="text-muted-foreground !mt-2 text-sm">
            <a href="https://menshairstyletips.com/high-top-fade-haircut/">
              Today
            </a>
            &apos;s high top fade.
          </p>
        </div>
      </div>

      <Carousel className="mx-auto  w-10/12 py-4">
        <CarouselContent>
          {items?.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className=" bg-slate-200">
                  <CardContent className="flex  h-full flex-col items-center justify-center space-y-4 p-6">
                    <div className="relative flex aspect-video h-96">
                      <Image src={item.src} alt={item.alt} fill />
                    </div>
                    <span className="text-muted-foreground text-base">
                      {item.description}
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <p>
        The innovations continue today: Will.i.am of The Black Eyed Peas went
        from Amasunzu-style cut to its form-fitting headgear.
      </p>

      <div className="flex flex-col gap-4 py-4 lg:flex-row">
        <div className="w-4/12">
          <img src="/img/william-1.png" alt="" className="img-fluid rounded" />
        </div>
        <div className="w-4/12">
          <img src="/img/william-2.png" alt="" className="img-fluid rounded" />
        </div>
      </div>
    </>
  );
};

export default TraditionalPage;

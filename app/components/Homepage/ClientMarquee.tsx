import Marquee from "react-fast-marquee";
import client1 from "../../assets/images/clients/Google.png";
import client2 from "../../assets/images/clients/Pinterest.png";
import client3 from "../../assets/images/clients/Spotify.png";
import client4 from "../../assets/images/clients/Stripe.png";
import client5 from "../../assets/images/clients/Reddit.png";
import Image from "next/image";

const clients = [client1, client2, client3, client4, client5];

export const PartnersMarquee = () => {
  return (
    <div className="bg-white">
      <h2 className="pb-4 text-title-7 md:text-title-4 text-primary-700 text-center font-bold">
        Our Partners
      </h2>
      <Marquee>
        <div className="flex gap-10 justify-between">
          {clients.map((client, index) => (
            <Image
              key={index}
              src={client.src}
              alt="Client"
              className="w-[120px] h-[120px] object-contain"
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
};



/* eslint-disable @next/next/no-img-element */
const CulturePage = () => {
  return (
    <>
      <h1>More Than a Cut</h1>
      <p className="text-muted-foreground !mt-0 text-base">
        Barbering in Contemporary Culture
      </p>
      <div className="flex flex-col items-center gap-4 py-4 lg:flex-row ">
        <p className="w-full lg:w-8/12">
          Recognizing the economic and social significance of Black barbershops,
          many celebrities and companies have invested into the barbering
          enterprise. Michael Render, better known as rapper Killer Mike, has
          invested into a franchise of barbershops called The SWAG Shop (Shave
          Wash and Groom). He is known for powerful public statements in Black
          communities concerning violence, protection against covid, and local
          economies. His support for these Barbershops provides both a space
          where Black men can educate one another about such issues, and keep
          local paychecks circulating in the Black community instead of going to
          chains owned by big corporations outside it.
        </p>

        <img src="/img/swag.png" alt="" className="w-full rounded lg:w-4/12" />
      </div>
      <div className="flex flex-col items-center gap-4 py-4 lg:flex-row ">
        <p className="w-full lg:w-8/12">
          NBA superstar LeBron James has also illuminated the importance of
          barber shop culture through his HBO debuted show, The Shop. He said he
          picked that setting because &quot;when I was a kid, being in
          barbershops meant listening to adults talk about sports, clothing,
          politics, music, everything happened in the shop. It was so real and
          so candid — no one had a sense of, well I can&apos;t be myself
          here.&quot; Barbers Risking Everything to Have Everything, better
          known as BRETHE, is a brand created by Birmingham, AL barber Tommy
          “TJ” Dudley. The brand features barbers being mentors, community
          activists, parents, and entrepreneurs. And they give great haircuts
          too!
        </p>

        <img
          src="/img/theshop.png"
          alt=""
          className="w-full rounded lg:w-4/12"
        />
      </div>
      <p>
        Barbers Risking Everything to Have Everything, better known as BRETHE,
        is a brand created by Birmingham, AL barber Tommy “TJ” Dudley. The brand
        features barbers being not just barbers but mentors, community
        activists, parents, and entrepreneurs.
      </p>
      <div className="row">
        <div className="col-md-4">
          <video
            controls
            width="100%"
            className="mx-auto mb-4"
            id="culture1Vid"
          >
            <source src="/video/culture1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="col-md-4">
          <video
            controls
            width="100%"
            className="mx-auto mb-4"
            id="culture2Vid"
          >
            <source src="/video/culture2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="col-md-4">
          <video
            controls
            width="100%"
            className="mx-auto mb-4"
            id="culture3Vid"
          >
            <source src="/video/culture3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <h2>Evolution of Style</h2>
      <video controls width="100%" className="mx-auto mb-4" id="beautyVid">
        <source src="/video/menbeauty.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h2>First Barber of the US for President Obama, Zariff</h2>
      <p>
        Zariff has has cut the hair of many famous Black men, including Muhammad
        Ali and Spike Lee. But, one of his most important clients has been the
        44th President, Barack Obama, and he is known for the “the Obama cut”,
        which was created right before Obama&apos;s debut at the National
        Democratic Convention.
      </p>
      <div className="row !items-start">
        <div className="w-full lg:w-5/12">
          <img src="/img/usbarber1.png" alt="" className="img-fluid rounded" />
          <p className="text-muted-foreground !mt-0 text-sm">
            President Obama&apos;s barber Zariff, The First Barber of The United
            States.
          </p>
        </div>
        <div className="w-full lg:w-5/12">
          <img src="/img/usbarber2.png" alt="" className="img-fluid rounded" />
        </div>
      </div>
    </>
  );
};

export default CulturePage;

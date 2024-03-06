/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <h1>Barbershop Computing</h1>

      <div className="flex flex-col-reverse gap-4 lg:flex-row">
        <div className="w-full lg:w-8/12">
          <p>
            For decades African American men and boys have entered into a
            barbershop to find signs similar to the one on the right. The
            barbershop can be a rite of passage, sports center, newsroom and
            philosophy convention all rolled into one. Barbers today have
            evolved the trade of haircutting into an art style with endless
            innovation. There&apos;s nothing like the feeling of leaving your
            barber&apos;s chair with a fresh, crisp line up or a new design to
            show off at school. Some of the designs are words or images
            important to the client. But many are reflecting what computer
            scientists would call an “algorithm” -- a pattern created by
            following some list of geometric procedures. “Turn up, go in a
            spiral, go out, repeat”-- learn a rule of thumb for what generally
            works best, and you can call it hip hop heuristics.
          </p>
          <p>
            This website combines barbering and computing. It will show you the
            origins of barbering in styles from across the African continent,
            and the evolution of barbering in the US. As Black communities
            survived enslavement and Jim Crow racism, barbers pooled money to
            buy their own shops, and became community hubs for politics,
            activism, lifestyle, culture, and technical knowledge. This site
            taps into the technical knowledge barbers possess and how that
            knowledge shapes their choice of tool and the overall outcome of
            their designs. You&apos;ll get the chance to explore this technical
            knowledge and create hairstyle simulations of your own using the
            online software.
          </p>
        </div>
        <div className="w-full lg:w-4/12">
          <img className="img-fluid" src="/img/homepage-updated.png" alt="" />
        </div>
      </div>
    </>
  );
}

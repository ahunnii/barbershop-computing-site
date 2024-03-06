/* eslint-disable @next/next/no-img-element */
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

import Link from "next/link";
import { Button } from "~/components/ui/button";

const ChallengePage = () => {
  type Challenge = {
    id: number;
    name: string;
    imageSrc: string;
    challengeLink: string[];
    solutionLink: string;
    description: string;
  };

  const challenges: Challenge[] = [
    {
      id: 1,
      name: "X/Y Challenge",
      imageSrc: "/img/challenge1.png",
      challengeLink: ["https://csdt.org/projects/22294/run"],
      solutionLink: "https://csdt.org/projects/22295/run",
      description: "Make two parallel lines using any blocks.",
    },
    {
      id: 2,
      name: "Curve Challenge",
      imageSrc: "/img/challenge2.png",
      challengeLink: ["https://csdt.org/projects/22286/run"],
      solutionLink: "https://csdt.org/projects/22287/run",
      description: "Complete the second half of the design using any blocks.",
    },
    {
      id: 3,
      name: "Square Loop Challenge",
      imageSrc: "/img/challenge3.png",
      challengeLink: ["https://csdt.org/projects/42360/run"],
      solutionLink: "https://csdt.org/projects/42361/run",
      description:
        "Use a loop to complete the square, putting the least amount of blocks as possible in the loop.",
    },
    {
      id: 4,
      name: "Star Loop Challenge",
      imageSrc: "/img/challenge4.png",
      challengeLink: ["https://csdt.org/projects/24146/run"],
      solutionLink: "https://csdt.org/projects/24145/run",
      description:
        "Complete the star by identifying what part of the code makes the star, placing some of that code inside one loop and deleting the rest. Then complete the remaining part of the top line.",
    },
    {
      id: 5,
      name: "Logarithmic Spiral Challenge",
      imageSrc: "/img/challenge5.png",
      challengeLink: ["https://csdt.org/projects/32940/run"],
      solutionLink: "https://csdt.org/projects/32939/run",
      description:
        'What pattern do you see in the "log spiral" blocks within this code? Make the fourth largest spiral by continuing the pattern.',
    },
    {
      id: 6,
      name: "X/Y Loop Challenge",
      imageSrc: "/img/challenge6.png",
      challengeLink: ["https://csdt.org/projects/29594/run"],
      solutionLink: "https://csdt.org/projects/29592/run",
      description:
        "Complete all five parallel lines by copying some of the code that is currently inside the loop, and changing the x and y coordinates.",
    },
    {
      id: 7,
      name: "Variables and Nested Loop Challenge",
      imageSrc: "/img/challenge7.png",
      challengeLink: [], // Assuming this is the correct challenge link based on HTML structure.
      solutionLink: "https://csdt.org/projects/41601/run",
      description:
        'Try to re-create the Adinkra Symbols with a "Change" variable block, a nested loop (i.e. "Repeat block"), and two "translate" blocks (one by width and one by height)',
    },
    {
      id: 8,
      name: "Zig-Zag Challenge",
      imageSrc: "/img/challenge8.png",
      challengeLink: [
        "https://csdt.org/projects/42620/run",
        "https://csdt.org/projects/42619/run",
        "https://csdt.org/projects/42621/run",
      ], // Link for the first challenge. It's up to you how you want to handle multiple challenges.
      solutionLink: "https://csdt.org/projects/32763/run",
      description: `Challenge 1: Make two zigzags using any blocks and loops. Challenge 2: Complete two zigzags by using two loops. Challenge 3: Complete two zigzags with consistent angles.`,
    },
    {
      id: 9,
      name: "Change the Background", // This has no challenge link, only a tutorial link provided
      imageSrc: "/img/backgroundtut.png",
      challengeLink: [],
      solutionLink: "/resources/SwitchBackgrounds.pdf",
      description:
        "Switch to a background in our library, or create your own to personalize the simulation",
    },
  ];

  return (
    <>
      <h1>Barbershop Computing Design Challenges</h1>
      <h6>Test your knowledge with these projects</h6>

      <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {challenges.map((challenge) => (
          <div className="flex h-full w-full grow" key={challenge.id}>
            <Card className="flex flex-col">
              <Link href={challenge.challengeLink[0] ?? ""}>
                <img
                  src={challenge.imageSrc}
                  className="img-fluid tut-img"
                  alt=""
                />
              </Link>
              <CardHeader>
                <CardTitle>{challenge.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{challenge.description}</CardDescription>
              </CardContent>
              <CardFooter className="mt-auto flex  flex-col">
                {challenge.challengeLink.map((link, idx) => (
                  <Link
                    href={link}
                    key={idx}
                    className="font-semibold text-blue-700 hover:text-blue-500"
                  >
                    {challenge.challengeLink.length === 1 && "The"} Challenge{" "}
                    {challenge.challengeLink.length === 1 ? "" : idx + 1} &nbsp;
                    <i className="fas fa-angle-right"></i>
                  </Link>
                ))}

                <hr />
                <p className="text-muted-foreground !mt-2 text-sm">
                  View the <Link href={challenge.solutionLink}>solution</Link>.
                </p>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
      {/* <div className="row">
        <div className="col-lg-3 col-md-6 mt-3">
          <div className="ts-card">
            <div>
              <a href="https://csdt.org/projects/22294/run">
                <img src="/img/challenge1.png" className="img-fluid tut-img" />
              </a>
            </div>
            <div className="ts-section">
              <div className="ts-header">X/Y Challenge</div>
              <p>Make two parallel lines using any blocks.</p>
            </div>
            <div className="ts-section tutorial-link">
              <a className="big-link" href="https://csdt.org/projects/22294/run">
                The Challenge&nbsp;<i className="fas fa-angle-right"></i>
              </a>
              <br />
              <hr />
              <p className="text-sm text-muted-foreground !mt-2">
                View the <a href="https://csdt.org/projects/22295/run">solution</a>.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-3">
          <div className="ts-card">
            <div>
              <a href="https://csdt.org/projects/22286/run">
                <img src="/img/challenge2.png" className="img-fluid tut-img" />
              </a>
            </div>
            <div className="ts-section">
              <div className="ts-header">Curve Challenge</div>
              <p>Complete the second half of the design using any blocks.</p>
            </div>
            <div className="ts-section">
              <a className="big-link" href="https://csdt.org/projects/22286/run">
                The Challenge&nbsp;<i className="fas fa-angle-right"></i>
              </a>
              <br />
              <hr />
              <p className="text-sm text-muted-foreground !mt-2">
                View the <a href="https://csdt.org/projects/22287/run">solution</a>.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mt-3">
          <div className="ts-card">
            <div>
              <a href="https://csdt.org/projects/42360/run">
                <img src="/img/challenge3.png" className="img-fluid tut-img" />
              </a>
            </div>
            <div className="ts-section">
              <div className="ts-header">Square Loop Challenge</div>
              <p>
                Use a loop to complete the square, putting the least amount of
                blocks as possible in the loop.
              </p>
            </div>
            <div className="ts-section tutorial-link">
              <a className="big-link" href="https://csdt.org/projects/42360/run">
                The Challenge&nbsp;<i className="fas fa-angle-right"></i>
              </a>
              <br />
              <hr />
              <p className="text-sm text-muted-foreground !mt-2">
                View the <a href="https://csdt.org/projects/42361/run">solution</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6 mt-3">
          <div className="ts-card">
            <div>
              <a href="https://csdt.org/projects/24146/run">
                <img src="/img/challenge4.png" className="img-fluid tut-img" />
              </a>
            </div>
            <div className="ts-section">
              <div className="ts-header">Star Loop Challenge</div>
              <p style="max-height: 10rem; overflow-y:auto;">
                Complete the star by identifying what part of the code makes the
                star, placing some of that code inside one loop and deleting the
                rest. Then complete the remaining part of the top line.
              </p>
            </div>
            <div className="ts-section tutorial-link">
              <a className="big-link" href="https://csdt.org/projects/24146/run">
                The Challenge&nbsp;<i className="fas fa-angle-right"></i>
              </a>
              <br />
              <hr />
              <p className="text-sm text-muted-foreground !mt-2">
                View the <a href="https://csdt.org/projects/24145/run">solution</a>.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-3">
          <div className="ts-card">
            <div>
              <a href="https://csdt.org/projects/32940/run">
                <img src="/img/challenge5.png" className="img-fluid tut-img" />
              </a>
            </div>
            <div className="ts-section">
              <div className="ts-header">Logarithmic Spiral Challenge</div>
              <p>
                What pattern do you see in the "log spiral" blocks within this
                code? Make the fourth largest spiral by continuing the pattern.
              </p>
            </div>
            <div className="ts-section">
              <a className="big-link" href="https://csdt.org/projects/32940/run">
                The Challenge&nbsp;<i className="fas fa-angle-right"></i>
              </a>
              <br />
              <hr />
              <p className="text-sm text-muted-foreground !mt-2">
                View the <a href="https://csdt.org/projects/32939/run">solution</a>.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mt-3">
          <div className="ts-card">
            <div>
              <a href="https://csdt.org/projects/29594/run">
                <img src="/img/challenge6.png" className="img-fluid tut-img" />
              </a>
            </div>
            <div className="ts-section">
              <div className="ts-header">X/Y Loop Challenge</div>
              <p>
                Complete all five parallel lines by copying some of the code
                that is currently inside the loop, and changing the x and y
                coordinates.
              </p>
            </div>
            <div className="ts-section tutorial-link">
              <a className="big-link" href="https://csdt.org/projects/29594/run">
                The Challenge&nbsp;<i className="fas fa-angle-right"></i>
              </a>
              <br />
              <hr />
              <p className="text-sm text-muted-foreground !mt-2">
                View the <a href="https://csdt.org/projects/29592/run">solution</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6 mt-3">
          <div className="ts-card">
            <div>
              <a href="https://csdt.org/projects/24146/run">
                <img src="/img/challenge7.png" className="img-fluid tut-img" />
              </a>
            </div>
            <div className="ts-section">
              <div className="ts-header">
                Variables and Nested Loop Challenge
              </div>
              <p>
                Try to re-create the Adinkra Symbols with a "Change" variable
                block, a nested loop (i.e. "Repeat block"), and two "translate"
                blocks (one by width and one by height)
              </p>
            </div>
            <div className="ts-section tutorial-link">
              <p className="text-sm text-muted-foreground !mt-2">
                View the <a href="https://csdt.org/projects/41601/run">solution</a>.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-3">
          <div className="ts-card">
            <div>
              <img
                src="/img/challenge8.png"
                className="img-fluid tut-img"
                alt="challenge 8"
              />
            </div>
            <div className="ts-section">
              <div className="ts-header">Zig-Zag Challenge</div>
              <p>Challenge 1: Make two zigzags using any blocks and loops.</p>
              <p>Challenge 2: Complete two zigzags by using two loops.</p>
              <p>Challenge 3: Complete two zigzags with consistent angles.</p>
            </div>
            <div className="ts-section">
              <a className="big-link" href="https://csdt.org/projects/42620/run">
                The Challenge 1&nbsp;<i className="fas fa-angle-right"></i>
              </a>
              <br />
              <a className="big-link" href="https://csdt.org/projects/42619/run">
                The Challenge 2&nbsp;<i className="fas fa-angle-right"></i>
              </a>
              <br />
              <a className="big-link" href="https://csdt.org/projects/42621/run">
                The Challenge 3&nbsp;<i className="fas fa-angle-right"></i>
              </a>
              <br />
              <hr />
              <p className="text-sm text-muted-foreground !mt-2">
                View the <a href="https://csdt.org/projects/32763/run">solution</a>.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-3">
          <div className="ts-card">
            <div>
              <img
                src="/img/challenge8.png"
                className="img-fluid tut-img"
                alt="challenge 8"
              />
            </div>
            <div className="ts-section">
              <div className="ts-header">Change the Background</div>
              <p>
                Switch to a background in our library, or create your own to
                personalize the simulation
              </p>
            </div>
            <div className="ts-section">
              <a className="big-link" href="/resources/SwitchBackgrounds.pdf">
                Tutorial&nbsp;<i className="fas fa-angle-right"></i>
              </a>
              <br />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
export default ChallengePage;

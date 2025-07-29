import React from "react";
import "../css/speaker.css";

const Speaker = () => {
  return (
    <div className="main-card">
      <div className="sub-card">
        <h2>Speaker</h2>
        <h3>
          We’re happy to welcome over twenty speakers to present on the
          industry’s latest technologies.<br></br> Prepare for an inspiration
          extravaganza.
        </h3>
      </div>
      <div className="sec-main">
        <section className="author">
          <div className="auth" id="auth-1">
            <h2>Aaron Irizarry</h2>
            <h5>Designing a Culture of Design</h5>
            <p>
              Workplace culture doesn’t start with beanbags, foosball tables, or
              a beer fridge, and it doesn’t end with neckties, PCs, or big
              corporations. It’s the unwritten rules, behavior, beliefs, and the
              motivations that enable good work to get done, or it’s what
              stifles a workforce. For design to be most effective and for
              designers to feel valued, we need to work in a culture that
              embraces design and allows it to succeed.
            </p>

            <p>
              In Aaron’s session he will explore how to recognize the traits of
              organizations that *get* design, both large and small. He will
              share what those teams, departments, and companies have that
              others don’t, and more importantly, how to begin to change your
              own workplace’s culture. Once you’ve worked within a culture of
              design it’s almost impossible to imagine yourself anywhere else.
            </p>
            <h5>About Aaron</h5>
            <p>
              Aaron Irizarry is a Senior Product Designer for Nasdaq OMX, a
              lover of heavy metal, a foodie, and a master of BBQ arts. You can
              find some of his thoughts and presentations on the conversation
              surrounding design over at{" "}
              <a href="discussingdesign.com" target="_self">
                {" "}
                discussingdesign.com.
              </a>{" "}
            </p>
          </div>

          <div id="auth-2" className="auth">
            <h2>Adam Connor</h2>
            <h5>
              Lights! Camera! Interaction! Design Inspiration from Filmmakers
            </h5>
            <p>
              Films succeed in evoking responses and engaging audiences only
              with a combination of well-written narrative and effective
              storytelling technique. It’s the filmmaker’s job to put this
              together. To do so they’ve developed processes, tools and
              techniques that allow them to focus attention, emphasize
              information, foreshadow and produce the many elements that
              together comprise a well-told story.
            </p>
            <p>
              With this workshop, we’ll revisit the topic of using stories in
              design and expand on the technical aspects used in film to
              communicate. We’ll look at some tools used in film, such as
              cinematic patterns, beat sheets, and storyboards. We’ll consider
              why they’re used and how we might look to them for inspiration.
            </p>
            <h5>About Adam</h5>
            <p>
              Adam Connor is a designer, illustrator and speaker passionate
              about collaboration, communication, creativity and storytelling.
              As an Experience Design Director with Mad*Pow, Adam combines 10+
              years of experience in interaction and experience design with a
              background in computer science, film, and animation to create
              effective and easy-to-use digital products and services. He
              believes that no matter how utilitarian a tool is, at the core of
              its creation lies a story; uncovering that story is key to its
              success. Occasionally, he shares his perspectives on design at{" "}
              <a href="adamconnor.com" target="_self">
                adamconnor.com{" "}
              </a>{" "}
              and{" "}
              <a href="discussingdesign.com" target="_self">
                {" "}
                discussingdesign.com.
              </a>{" "}
            </p>
          </div>

          <div id="auth-3" className="auth">
            <h2>AJ Self</h2>
            <h5>(You Should Be) Testing Your JavaScript</h5>
            <p>
              JavaScript applications frequently utilize battle-tested libraries
              like jQuery, AngularJS, Backbone.js and more, but how can we be
              sure that our code is ready for production? This talk will share
              tips on how writing tests can be written easily and quickly and
              how to remove buggy code through testing.
            </p>
            <h5>About AJ</h5>
            <p>AJ is a software engineer specializing in JavaScript working at Belly in Chicago. Lately he has been writing applications with AngularJS and loving it. When not coding he is out loving the outdoors with his dog, Sunshine.</p>
          </div>

          <div id="auth-4" className="auth">
            <h2>Arman Ghosh</h2>
            <h5>Designing Deals: How Good Design Drives Sales</h5>
            <p>Perception influences decisions, especially when it comes to selling products and services. Learn why before you even start sales conversations; good, thoughtful design and presentation will define you and your ability to close deals.</p>
            <h5>About Arman</h5>
            <p>Arman is an entrepreneur who has his roots planted in building aggressive sales and revenue-generating teams. Having built out national sales and operations teams in the B2B and consumer spaces, his focus has been driving aggressive growth for technology-based companies. He has an extensive operating background and has built a career disrupting sales processes and approaches with companies doing the same in their respective technology spaces.</p>
          </div>

          <div id="auth-5" className="auth">
            <h2>Bermon Painter</h2>
            <h5>Death to Wireframes: Long Live Rapid Prototyping</h5>
            <p>Static wireframes are a drag on the whole design process. Prototyping makes things a little better by allowing you to stitch together static wireframes or mockups while adding basic interactions. Rapid prototyping with HTML, CSS, and JavaScript is even better and faster; it increases collaboration and improves the iteration process. Kill your wireframes. Long live rapid prototyping.</p>
            <h5>About Bermon</h5>
            <p>Bermon is the organizer of various community groups for user experience designers and front-end developers, and the organizer of Blend Conference, a three-day, multi-track event for user experience strategists, designers and developers. He also leads the user experience team for Cardinal Solutions’ Charlotte office, where he consults with large enterprise clients on interesting problems across user experience, design and front-end development.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Speaker;

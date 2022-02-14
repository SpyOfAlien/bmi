import Page from "../components/layout/page";
import HomeAbout from "../components/partials/home/home-about/home-about";
import HomeProduct from "../components/partials/home/home-product/home-product";
import HomeHistory from "../components/partials/home/home-history/home-history";
import HomeClients from "../components/partials/home/home-clients/home-clients";
import HomeContact from "../components/partials/home/home-contact/home-contact";
import HomeHero from "../components/partials/home/home-hero/home-hero";

export default function Home() {
  return (
    <Page>
      <section className="mb-32">
        <HomeHero />
      </section>
      <section className="mb-32">
        <HomeAbout />
      </section>
      <section className="mb-32">
        <HomeProduct />
      </section>
      {/* <section className="mb-32">
        <HomeHistory />
      </section> */}
      <section className="mb-32">
        <HomeContact />
      </section>
      <section className="mb-32">
        <HomeClients />
      </section>
    </Page>
  );
}

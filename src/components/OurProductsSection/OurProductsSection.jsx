import Container from "../Container/Container";
import { products } from "../../data";
import ProductItem from "./ProductItem/ProductItem";
import { List, MoreButton, Section, Title } from "./OurProductsSection.styled";
import { useState } from "react";

const OurProductsSection = () => {
  const [visibleCount, setVisibleCount] = useState(8);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 8, products.length));
  };

  const hasMoreProducts = visibleCount < products.length;

  return (
    <Section>
      <Container>
        <Title>Our Products</Title>
        <List>
          {products.slice(0, visibleCount).map((item) => (
            <ProductItem key={item.img} item={item} />
          ))}
        </List>
        <MoreButton onClick={handleShowMore} disabled={!hasMoreProducts}>
          Show More
        </MoreButton>
      </Container>
    </Section>
  );
};

export default OurProductsSection;

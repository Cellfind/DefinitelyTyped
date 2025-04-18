import * as React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

interface CardProps {
    title: string;
    description: string;
}

const Card = ({ description, title }: CardProps) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                padding: "40px",
                gap: "16px",
                borderRadius: "16px",
                boxShadow: "0 0 16px rgba(0, 0, 0, 0.1)",
            }}
        >
            <p
                style={{
                    fontSize: "24px",
                    lineHeight: "32px",
                }}
            >
                {title}
            </p>
            <p>{description}</p>
        </div>
    );
};

const Test = () => {
    return (
        <>
            {/* Test with minimal props */}
            <ResponsiveMasonry>
                <Masonry>
                    <Card title="Basic" description="Minimal props test" />
                </Masonry>
            </ResponsiveMasonry>

            {/* Test with all props */}
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                className="responsive-masonry"
                style={{ padding: "20px" }}
            >
                <Masonry
                    containerTag="section"
                    itemTag="article"
                    sequential
                    gutter="40px"
                    columnsCount={5}
                    className="masonry-grid"
                    style={{ background: "#f0f0f0" }}
                    itemStyle={{ margin: "10px" }}
                >
                    <Card title="Lorem ipsum" description="Lorem ipsum dolor sit." />
                    <Card title="Lorem ipsum" description="Lorem ipsum dolor sit." />
                    <Card title="Lorem ipsum" description="Lorem ipsum dolor sit." />
                    <Card title="Lorem ipsum" description="Lorem ipsum dolor sit." />
                    <Card title="Lorem ipsum" description="Lorem ipsum dolor sit." />
                    <Card title="Lorem ipsum" description="Lorem ipsum dolor sit." />
                    <Card title="Lorem ipsum" description="Lorem ipsum dolor sit." />
                    <Card title="Lorem ipsum" description="Lorem ipsum dolor sit." />
                </Masonry>
            </ResponsiveMasonry>
        </>
    );
};

import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const BlogLayout: FC<Props> = ({ children }) => {
  return (
    <section>
      <div>Test</div>
      {children}
    </section>
  );
};

export default BlogLayout;

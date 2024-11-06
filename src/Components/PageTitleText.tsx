import "../Styles/PageTitleText.css";

interface PageTitleTextProps {
  pagetitletext: any;
}

export const PageTitleText: React.FC<PageTitleTextProps> = ({
  pagetitletext,
}) => {
  return (
    <>
      <blockquote>
        <p>{ pagetitletext } </p>
      </blockquote>
    </>
  );
};

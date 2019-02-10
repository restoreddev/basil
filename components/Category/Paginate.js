import Link from 'next/link';

export default (props) => {
  let previousPage = props.currentPage > 1 ? props.currentPage - 1 : props.currentPage;
  let nextPage = props.currentPage < props.totalPages ? props.currentPage + 1 : props.currentPage;

  return (
    <div className="row row--left row--middle">
      <Link href={`/content?slug=${props.slug}&page=${previousPage}`} as={`/${props.slug}?page=${previousPage}`}>
        <a className={'button' + (props.currentPage <= 1 ? ' button--inactive' : '')}>
          <i className="ion-arrow-left-c" />
          <span className="button__text"> Previous</span>
        </a>
      </Link>
      <div className="mx-2">Page {props.currentPage} of {props.totalPages} <br/> {props.totalCount} Items</div>
      <Link href={`/content?slug=${props.slug}&page=${nextPage}`} as={`/${props.slug}?page=${nextPage}`}>
        <a className={'button' + (props.currentPage >= props.totalPages ? ' button--inactive' : '')}>
          <span className="button__text">Next </span>
          <i className="ion-arrow-right-c" />
        </a>
      </Link>
    </div>
  );
};

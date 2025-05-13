type FacilityCardProps = {
  name: string;
  address: string;
  service: string;
  target: string;
  time: string;
  price: string;
  url: string;
};

export function FacilityCard(props: FacilityCardProps) {
  return (
    <article className="border rounded p-4 shadow-md mb-4 bg-white">
      <h2 className="text-lg font-semibold text-blue-600">{props.name}</h2>
      <p className="text-sm text-gray-600">所在地：{props.address}</p>
      <p className="text-sm text-gray-600">提供サービス：{props.service}</p>
      <p className="text-sm text-gray-600">対象児童：{props.target}</p>
      <p className="text-sm text-gray-600">対応時間：{props.time}</p>
      <p className="text-sm text-gray-600">料金：{props.price}</p>
      <a
        href={props.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
        aria-label={`${props.name}のWebサイトを新しいタブで開く`}
      >
        Webサイト
      </a>
    </article>
  );
} 
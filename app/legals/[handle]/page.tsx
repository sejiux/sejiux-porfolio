 type Props = {
  params: Promise<{ handle: string }>
}

export default async function Legals (props: Props) {
  const params = await props.params;
  console.log(params.handle);
  return (
    <div>
      en cours de rédaction...
    </div>
  );
}

import {Card, CardHeader} from "@mui/material";

export default function CkkWalletSummeryCardType1() {
  return (
    <Card

    >
      <CardHeader
        title={'کیف پول'}
        disableTypography
        titleTypographyProps={{
          fontWeight: 'bold'
        }}
        action={<div>foo</div>}

      />
      bar
    </Card>
  );
}
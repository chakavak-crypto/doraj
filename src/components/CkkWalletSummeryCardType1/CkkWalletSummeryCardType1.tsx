'use client';

import {Card, CardHeader} from "@mui/material";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";

export default function CkkWalletSummeryCardType1() {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      axios
        .get('https://api.github.com/repos/tannerlinsley/react-query')
        .then((res) => res.data),
  })
  console.log(isLoading)
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
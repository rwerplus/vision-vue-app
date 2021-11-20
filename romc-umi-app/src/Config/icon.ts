import { createFromIconfontCN } from '@ant-design/icons';

export const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2014639_nylp56ts5r.js',
});

export const UseIconFont = () => {
  return [ IconFont ];
};

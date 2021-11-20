import { createFromIconfontCN } from '@ant-design/icons';

export const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2014639_it7z0z03hae.js',
});

export const UseIconFont = () => {
  return [ IconFont ];
};

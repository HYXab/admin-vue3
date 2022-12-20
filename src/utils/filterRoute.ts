const filterroutes = (routes: any, list: any) => {
  const res = routes.filter(i => list.includes(i.name))
  res.forEach(i => {
    if(i.children) {
      i.children = filterroutes(i.children,list)
    }
  })
  return res
};

export default filterroutes
function p(t,e){return`https://wa.me/${t.number.replace(/\D/g,"")}?text=${encodeURIComponent(e??t.message)}`}export{p as a};

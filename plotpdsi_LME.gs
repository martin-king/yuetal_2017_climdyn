function xxx

'reset'

'set vpage 0. 11 0. 7'
'set mpdraw on'
'set rgb 17 90 90 90'
'set map 17 1 6'
'set grid on 5 1'
'set xlopts 1 6 0.32'
'set ylopts 1 6 0.35'
'set font 0'
'set xlint 10'
'set ylint 10'
*'set xlint 15'
*'set ylint 15'
'set grads off'
'set display color white'
*Europe
'set lon -15 45'
'set lat 35 75'
*Asia
*'set lon 60 145'
*'set lat -10 55'

*LME Control
*number of points 12: 'd sum(maskout(enso.2,enso.2-2.5)/maskout(enso.2,enso.2-2.5),t=1,t=1156)'
*number of points 180: 'd sum(maskout(enso.2,enso.2-1)/maskout(enso.2,enso.2-1),t=1,t=1156)'

*LME full forcings 1900-2005
*number of points 171: 'd sum(maskout(enso.2,enso.2-1)/maskout(enso.2,enso.2-1),t=1,t=1060)'
*number of points 69: 'd sum(maskout(enso.2,enso.2-2)/maskout(enso.2,enso.2-2),t=1,t=1060)'
*number of points 11: 'd sum(maskout(enso.2,enso.2-2.5)/maskout(enso.2,enso.2-2.5),t=1,t=1060)'

*el nino between 1 to 20 std dev: 
'compo=ave(maskout(maskout(pdsi,enso.2-2.5),-abs(enso.2)+20.),t=1,t=1060)'
*la nina between 1 to 20 std dev: 
*'compo=ave(maskout(maskout(pdsi,-enso.2-1.),-abs(enso.2)+20),t=1,t=1156)'

'run /Users/martinpeterking/work_2016dec.dir/martinking_temporary.dir/Desktop/work_sep2016.dir/some_grads_scripts.dir/scripts/rgbset.gs'

'variance=ave(pow(maskout(maskout(pdsi,enso.2-2.5),-abs(enso.2)+20.)-compo,2),t=1,t=1060)'
'tvalue=abs(compo)/sqrt(variance/11)'

'set gxout grfill'
'set csmooth off'
'set clevs -1. -0.8 -0.6  -0.4  -0.2 -0.1 0.1 0.2  0.4  0.6 0.8 1.'
'set ccols 79  78 77  76  75  74  0  32  36 38 43 44 45 48'
'd compo'
*'d maskout(compo,tvalue-3.)'
'run /Users/martinpeterking/work_2016dec.dir/martinking_temporary.dir/Desktop/work_sep2016.dir/some_grads_scripts.dir/scripts/cbar.gs 1.1 1 9.3 3.5'
* cbar.gs sf vert xmid ymid

*set tile number type <width <height <lwid <fgcolor <bgcolor>>>>>
'set tile 1 4 10 10 4 1'
'set rgb 81 tile 1'
'set ccols 81 81'
'set clevs 0.'
'd maskout(compo,tvalue-2.2)'

'basemap O 15 17 L'
'set gxout contour'
'set cmin 100'
'd compo'

return

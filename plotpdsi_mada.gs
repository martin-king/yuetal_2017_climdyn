function xxx

'reset'

'set vpage 0. 11 0. 7'
*'set mpdset mres'
'set mpdraw on'
'set rgb 17 90 90 90'
'set map 17 1 6'
'set grid on 5 1'
'set xlopts 1 6 0.32'
'set ylopts 1 6 0.35'
'set font 0'
'set xlint 15'
'set ylint 15'
'set grads off'
'set display color white'

*number of points 125: sum(maskout(enso.2,enso.2-1)/maskout(enso.2,enso.2-1),t=1,t=703)
*number of points 12: sum(maskout(enso.2,enso.2-2)/maskout(enso.2,enso.2-2),t=1,t=703)
*number of points 124: sum(maskout(enso.2,-enso.2-1)/maskout(enso.2,-enso.2-1),t=1,t=703)
*number of points 18: sum(maskout(enso.2,-enso.2-2)/maskout(enso.2,-enso.2-2),t=1,t=703)


*el nino between 1 to 20 std dev: 
*'compo=1.*ave(maskout(maskout(pdsi,enso.2-1.),-abs(enso.2)+20),t=1,t=702)'
*el nino above 2 std dev:
*'compo=ave(maskout(maskout(pdsi,enso.2+0.23-0.286),-abs(enso.2)+10),t=1,t=703)'
*la nina between 1 to 20 std dev: 
'compo=1.*ave(maskout(maskout(pdsi,-enso.2-1),-abs(enso.2)+20),t=1,t=702)'

'run /Users/martinpeterking/work_2016dec.dir/martinking_temporary.dir/Desktop/work_sep2016.dir/some_grads_scripts.dir/scripts/rgbset.gs'

'variance=ave(pow(maskout(maskout(pdsi,-enso.2-1.),-abs(enso.2)+20.)-compo,2),t=1,t=702)'
'tvalue=abs(compo)/sqrt(variance/124)'
*'pdsivar=ave(pow(pdsi,2),t=1001,t=1103)'

'set gxout grfill'
'set csmooth off'
'set clevs -1. -0.8 -0.6  -0.4  -0.2 -0.1 0.1 0.2  0.4  0.6 0.8 1.'
'set rgb 34  160 240 180'
'set rgb 35  120 190 140'
'set rgb 36  0 150 0'
'set rgb 37  0 120 0'
'set rgb 38  0 90  0'
'set rgb 39  0 60  0'
'set ccols 79  78 77  76  75  74  0  34 35 36 37 38 39'
*'set ccols 79  78 77  76  75  74  0  32  36 38 43 44 45 48'
*'set clevs 0. 1. 1.2 1.4 1.6 1.8 2.'
*'set ccols 0  32  36 38 43 44 45 48'
*'d sqrt(pdsivar)'
*'d maskout(compo,tvalue-2.)'
'd compo'
*'compo=ave(pdsi,time=jun1340,time=jun1370)'
*'d compo'
'run /Users/martinpeterking/work_2016dec.dir/martinking_temporary.dir/Desktop/work_sep2016.dir/some_grads_scripts.dir/scripts/cbar.gs 1.1 1 8.9 3.5'
* cbar.gs sf vert xmid ymid

*set tile number type <width <height <lwid <fgcolor <bgcolor>>>>>
'set tile 1 4 8 8 4 1'
'set rgb 81 tile 1'
'set ccols 81 81'
'set clevs 0.'
'd maskout(compo,tvalue-2.1)'

*'set gxout grfill'
*'set gxout contour'
*'set clab off'
*'set cint 0.1'
*'set cmax -0.1'
*'set cstyle 2'
*'set ccolor 1'
*'set cthick 7'
*'d compo'
*'set cmin 0.'
*'set clevs 0.'
*'set cstyle 1'
*'set ccolor 1'
*'set cthick 6'
*'d compo'
*'d tvalue-1.7'

*'basemap O 15 17 L'
*'set clevs 0. 1. 1.2 1.4 1.6 1.8 2.'
*'set ccols 0  32  36 38 43 44 45 48'
*'d sqrt(pdsivar)'
*'set clevs -1. -0.8 -0.6  -0.4  -0.2 -0.1 0.1 0.2  0.4  0.6 0.8 1.'
*'set ccols 79  78 77  76  75  74  0  32  36 38 43 44 45 48'
*'d maskout(compo,tvalue-1.7)'

*'basemap O 15 17 L'
*'set gxout contour'
*'set cmin 100'
*'d compo'


return

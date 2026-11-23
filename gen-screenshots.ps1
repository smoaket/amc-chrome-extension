Add-Type -AssemblyName System.Drawing

function Make($path, $draw) {
    $bmp = New-Object System.Drawing.Bitmap(1280, 800)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    & $draw $g
    $g.Dispose()
    $bmp.Save($path, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $bmp.Dispose()
}

function S($c){ New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml($c)) }
function F($sz,$b){ New-Object System.Drawing.Font("Arial",$sz,[System.Drawing.FontStyle]$b) }

$out = "F:\Part D\New 2026\AMC 2026\AMC-2026-Clean\amc-extension\screenshots"
if(-not (Test-Path $out)){ New-Item -ItemType Directory -Path $out | Out-Null }

Make (Join-Path $out "screenshot-1-popup.jpg") {
    param($g)
    $g.Clear([System.Drawing.Color]::White)
    $g.FillRectangle((S "#0a8a4a"),0,0,1280,70)
    $g.FillEllipse((S "#ffffff"),18,17,36,36)
    $g.DrawString("AMC",(F 14 "Bold"),(S "#0a8a4a"),26,26)
    $g.DrawString("Arab Medical Center",(F 18 "Bold"),(S "#ffffff"),70,18)
    $g.DrawString("HCAC - ISO 9001 - Amman, Jordan",(F 12 "Regular"),(S "#ffffff"),70,44)
    $g.DrawString("ARABIC",(F 13 "Regular"),(S "#ffffff"),1190,26)

    $g.FillRectangle((S "#f0fdf7"),0,70,1280,90)
    $g.DrawString("Free 48-Hour Medical File Assessment",(F 20 "Bold"),(S "#066c3a"),30,90)
    $g.DrawString("Get a treatment plan and cost estimate from Arab Medical Center within 48 hours - all specialties.",(F 13 "Regular"),(S "#22543d"),30,122)

    $y=190
    $g.FillRectangle((S "#25d366"),30,$y,1220,50); $g.DrawString("WhatsApp AMC Now",(F 15 "Bold"),(S "#ffffff"),50,($y+14))
    $g.FillRectangle((S "#f0fdf7"),30,($y+60),1220,50); $g.DrawString("Call Patients Relation Office",(F 15 "Bold"),(S "#0a8a4a"),50,($y+74))
    $g.FillRectangle((S "#f0fdf7"),30,($y+120),1220,50); $g.DrawString("Email info@amc-hospital.com",(F 15 "Bold"),(S "#0a8a4a"),50,($y+134))
    $g.FillRectangle((S "#f7fafc"),30,($y+180),1220,50); $g.DrawString("Visit AMC Website",(F 15 "Bold"),(S "#4a5568"),50,($y+194))

    $tx=30;$ty=470
    $g.DrawString("Sample Treatment Costs (USD)",(F 14 "Bold"),(S "#2d3748"),$tx,$ty)
    $rows=@("CABG|$14-20K|$123K","TAVI|$40-50K|$70-90K","Total Knee|$7-8K|$30-45K","BMT (from)|$25K|$150-300K","Gastric Sleeve (from)|$2,500|$15-25K")
    $ry=$ty+30
    $g.FillRectangle((S "#e2ffe6"),$tx,$ry,500,28)
    $g.DrawString("Procedure",(F 12 "Bold"),(S "#0a4a2a"),($tx+10),($ry+5))
    $g.DrawString("AMC",(F 12 "Bold"),(S "#0a4a2a"),($tx+260),($ry+5))
    $g.DrawString("USA Avg.",(F 12 "Bold"),(S "#0a4a2a"),($tx+380),($ry+5))
    $ry+=30
    foreach($r in $rows){ $p=$r.Split("|"); $g.DrawString($p[0],(F 12 "Regular"),(S "#2d3748"),($tx+10),($ry+5)); $g.DrawString($p[1],(F 12 "Regular"),(S "#2d3748"),($tx+260),($ry+5)); $g.DrawString($p[2],(F 12 "Regular"),(S "#2d3748"),($tx+380),($ry+5)); $g.DrawLine((New-Object System.Drawing.Pen([System.Drawing.ColorTranslator]::FromHtml("#edf2f7"))), $tx, ($ry+26), ($tx+500), ($ry+26)); $ry+=28 }

    $ux=620
    $g.DrawString("- 60-80% lower cost than Western systems",(F 13 "Regular"),(S "#2d3748"),$ux,480)
    $g.DrawString("- Zero waiting list - scheduled within days",(F 13 "Regular"),(S "#2d3748"),$ux,510)
    $g.DrawString("- Patients from 75+ countries since 1994",(F 13 "Regular"),(S "#2d3748"),$ux,540)
    $g.DrawString("- First private-sector BMT lab in Jordan (2014)",(F 13 "Regular"),(S "#2d3748"),$ux,570)

    $g.FillRectangle((S "#fafafa"),0,760,1280,40)
    $g.DrawString("By Sobhi Moaket - MBD Manager - holylandsmd.com",(F 11 "Regular"),(S "#718096"),30,772)
}

Make (Join-Path $out "screenshot-2-badge.jpg") {
    param($g)
    $g.Clear([System.Drawing.Color]::White)
    $g.FillRectangle((S "#f0f2f5"),0,0,1280,800)
    $g.FillRectangle((S "#ffffff"),80,60,1120,620)
    $g.DrawString("Best Hospitals in Jordan for Cardiac Surgery",(F 22 "Bold"),(S "#1a365d"),120,100)
    $g.DrawString("Patients from around the world choose Jordan for world-class cardiac care at a fraction of Western costs.",(F 14 "Regular"),(S "#4a5568"),120,150)
    $g.DrawString("Arab Medical Center in Amman offers CABG, TAVI, and valve replacement with dual Siemens Artis Q cath labs.",(F 14 "Regular"),(S "#4a5568"),120,190)
    for($i=0;$i-lt 6;$i++){ $g.FillRectangle((S "#edf2f7"),120,(250+($i*50)),960,12) }

    $bx=1040;$by=680
    $g.FillRectangle((S "#0a8a4a"),$bx,$by,200,44)
    $g.FillEllipse((S "#ffffff"),($bx+12),($by+8),28,28)
    $g.DrawString("+",(F 20 "Bold"),(S "#0a8a4a"),($bx+20),($by+9))
    $g.DrawString("Contact AMC",(F 15 "Bold"),(S "#ffffff"),($bx+50),($by+12))
    $g.DrawString("Floating 'Contact AMC' badge appears on every page",(F 13 "Italic"),(S "#718096"),($bx-40),($by-30))
}

Make (Join-Path $out "screenshot-3-options.jpg") {
    param($g)
    $g.Clear([System.Drawing.Color]::White)
    $g.FillRectangle((S "#f7fafc"),0,0,1280,800)
    $g.DrawString("AMC Medical Tourism Helper - Preferences",(F 20 "Bold"),(S "#0a8a4a"),24,24)
    $g.FillRectangle((S "#ffffff"),24,70,1232,160)
    $g.DrawString("Language:",(F 14 "Bold"),(S "#1a1a2e"),48,120)
    $g.FillRectangle((S "#ffffff"),140,108,120,32)
    $g.DrawLine((New-Object System.Drawing.Pen([System.Drawing.ColorTranslator]::FromHtml("#d2d6dc"))),140,108,260,108)
    $g.DrawLine((New-Object System.Drawing.Pen([System.Drawing.ColorTranslator]::FromHtml("#d2d6dc"))),140,108,140,140)
    $g.DrawLine((New-Object System.Drawing.Pen([System.Drawing.ColorTranslator]::FromHtml("#d2d6dc"))),260,108,260,140)
    $g.DrawLine((New-Object System.Drawing.Pen([System.Drawing.ColorTranslator]::FromHtml("#d2d6dc"))),140,140,260,140)
    $g.DrawString("English",(F 13 "Regular"),(S "#1a1a2e"),150,116)

    $g.FillRectangle((S "#0a8a4a"),48,170,80,34); $g.DrawString("Save",(F 13 "Bold"),(S "#ffffff"),70,180)
    $g.FillRectangle((S "#edf2f7"),140,170,80,34); $g.DrawString("Reset",(F 13 "Bold"),(S "#4a5568"),162,180)
    $g.DrawString("Changes the popup and floating contact dialogue language.",(F 12 "Regular"),(S "#718096"),48,220)

    $g.FillRectangle((S "#ffffff"),24,250,1232,200)
    $g.DrawString("About",(F 15 "Bold"),(S "#1a1a2e"),48,290)
    $g.DrawString("Arab Medical Center (AMC) - Amman, Jordan. Established 1994. HCAC accredited, ISO 9001, ISO 22000, ISO 45001.",(F 12 "Regular"),(S "#718096"),48,320)
    $g.DrawString("This extension helps international patients connect with AMC for free 48-hour medical file assessment.",(F 12 "Regular"),(S "#718096"),48,346)
}

Write-Output "Created 3 JPEG screenshots at 1280x800:"
Get-ChildItem -LiteralPath $out | Select-Object Name, Length | Format-Table -AutoSize
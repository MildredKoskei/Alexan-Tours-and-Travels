Add-Type -AssemblyName System.IO.Compression.FileSystem

$packageFiles = @(
    # Dubai
    @{ Path = "C:\Alexan Tours and Travel Company\packages\ALEXAN PACKAGES\Dubai\Desert Pulse Expedition.docx"; Country = "Dubai" },
    @{ Path = "C:\Alexan Tours and Travel Company\packages\ALEXAN PACKAGES\Dubai\Dune Dash Expedition.docx"; Country = "Dubai" },
    @{ Path = "C:\Alexan Tours and Travel Company\packages\ALEXAN PACKAGES\Dubai\Imperial Dunes of Dubai.odt"; Country = "Dubai" },
    @{ Path = "C:\Alexan Tours and Travel Company\packages\ALEXAN PACKAGES\Dubai\Moonlit Sands of Dubai.docx"; Country = "Dubai" },

    # Kenya
    @{ Path = "C:\Alexan Tours and Travel Company\packages\ALEXAN PACKAGES\Kenya\Mid Range Budget\Eternal Majesty of the Mara and Serengeti.docx"; Country = "Kenya" },
    @{ Path = "C:\Alexan Tours and Travel Company\packages\ALEXAN PACKAGES\Kenya\Mid Range Budget\Golden Majesty of the Mara Plains.docx"; Country = "Kenya" },
    @{ Path = "C:\Alexan Tours and Travel Company\packages\ALEXAN PACKAGES\Kenya\Luxury packages\Golden Plains of Mara.docx"; Country = "Kenya" },
    @{ Path = "C:\Alexan Tours and Travel Company\packages\ALEXAN PACKAGES\Kenya\Mid Range Budget\Hidden Wildfront Expeditions.docx"; Country = "Kenya" },
    @{ Path = "C:\Alexan Tours and Travel Company\packages\ALEXAN PACKAGES\Kenya\Luxury packages\Imperial Plains of Kenya.docx"; Country = "Kenya" },
    @{ Path = "C:\Alexan Tours and Travel Company\packages\ALEXAN PACKAGES\Kenya\Mid Range Budget\Imperial Plains to Ocean.docx"; Country = "Kenya" },
    @{ Path = "C:\Alexan Tours and Travel Company\packages\ALEXAN PACKAGES\Kenya\Mid Range Budget\Into the Migration Trail.docx"; Country = "Kenya" },
    @{ Path = "C:\Alexan Tours and Travel Company\packages\ALEXAN PACKAGES\Kenya\Luxury packages\Majesty of Kilimanjaro & Mara.docx"; Country = "Kenya" },
    @{ Path = "C:\Alexan Tours and Travel Company\packages\ALEXAN PACKAGES\Kenya\Mid Range Budget\Opulent Amboseli Horizon Retreat.docx"; Country = "Kenya" },
    @{ Path = "C:\Alexan Tours and Travel Company\packages\ALEXAN PACKAGES\Kenya\Luxury packages\Opulent Savannah of the Great Mara.docx"; Country = "Kenya" },
    @{ Path = "C:\Alexan Tours and Travel Company\packages\ALEXAN PACKAGES\Kenya\Mid Range Budget\Predator Path Safari.docx"; Country = "Kenya" },
    @{ Path = "C:\Alexan Tours and Travel Company\packages\ALEXAN PACKAGES\Kenya\Luxury packages\Signature Safari & Beach Escape.docx"; Country = "Kenya" },
    @{ Path = "C:\Alexan Tours and Travel Company\packages\ALEXAN PACKAGES\Kenya\Mid Range Budget\Track the Wild Expedition.docx"; Country = "Kenya" },
    @{ Path = "C:\Alexan Tours and Travel Company\packages\ALEXAN PACKAGES\Kenya\Mid Range Budget\WILD HEART EXPEDITION.docx"; Country = "Kenya" },

    # Maldives
    @{ Path = "C:\Alexan Tours and Travel Company\packages\ALEXAN PACKAGES\Maldives\Moonlit Sands of the Maldives.docx"; Country = "Maldives" },
    @{ Path = "C:\Alexan Tours and Travel Company\packages\ALEXAN PACKAGES\Maldives\Southern Atoll Expedition.docx"; Country = "Maldives" },
    @{ Path = "C:\Alexan Tours and Travel Company\packages\ALEXAN PACKAGES\Maldives\Tranquil Dreams of the Maldives.docx"; Country = "Maldives" },
    @{ Path = "C:\Alexan Tours and Travel Company\packages\ALEXAN PACKAGES\Maldives\Whispers of the Indian Ocean.docx"; Country = "Maldives" },

    # Tanzania
    @{ Path = "C:\Alexan Tours and Travel Company\packages\ALEXAN PACKAGES\Tanzania\Mid-Range\Chase the Migration Trail.docx"; Country = "Tanzania" },
    @{ Path = "C:\Alexan Tours and Travel Company\packages\ALEXAN PACKAGES\Tanzania\Mid-Range\Grand Rift Valley Splendour of Tanzania.docx"; Country = "Tanzania" },
    @{ Path = "C:\Alexan Tours and Travel Company\packages\ALEXAN PACKAGES\Tanzania\Luxury\Imperial Crater & Savannah Escape.docx"; Country = "Tanzania" },
    @{ Path = "C:\Alexan Tours and Travel Company\packages\ALEXAN PACKAGES\Tanzania\Luxury\KENYA AND TANZANIA FLYING LUXURY SAFARI PACKAGE.docx"; Country = "Tanzania" },
    @{ Path = "C:\Alexan Tours and Travel Company\packages\ALEXAN PACKAGES\Tanzania\Mid-Range\Majestic Serengeti and Zanzibar Odyssey.docx"; Country = "Tanzania" },
    @{ Path = "C:\Alexan Tours and Travel Company\packages\ALEXAN PACKAGES\Tanzania\Luxury\Majestic Wilderness to Waves.docx"; Country = "Tanzania" },
    @{ Path = "C:\Alexan Tours and Travel Company\packages\ALEXAN PACKAGES\Tanzania\Mid-Range\Regal Plains of the Great Migration.docx"; Country = "Tanzania" },
    @{ Path = "C:\Alexan Tours and Travel Company\packages\ALEXAN PACKAGES\Tanzania\Luxury\Sky High Safari Experience.docx"; Country = "Tanzania" },
    @{ Path = "C:\Alexan Tours and Travel Company\packages\ALEXAN PACKAGES\Tanzania\Mid-Range\Timeless Echoes of Tanzania.docx"; Country = "Tanzania" },
    @{ Path = "C:\Alexan Tours and Travel Company\packages\ALEXAN PACKAGES\Tanzania\Mid-Range\Wildfrontiers of Serengeti & Mara Passage.docx"; Country = "Tanzania" },

    # Zanzibar
    @{ Path = "C:\Alexan Tours and Travel Company\packages\ALEXAN PACKAGES\Zanzibar\Exquisite Shores & Island Odyssey.docx"; Country = "Zanzibar" },
    @{ Path = "C:\Alexan Tours and Travel Company\packages\ALEXAN PACKAGES\Zanzibar\Family Island Quest.docx"; Country = "Zanzibar" },
    @{ Path = "C:\Alexan Tours and Travel Company\packages\ALEXAN PACKAGES\Zanzibar\Majestic Shores of Zanzibar.docx"; Country = "Zanzibar" },
    @{ Path = "C:\Alexan Tours and Travel Company\packages\ALEXAN PACKAGES\Zanzibar\Ocean Bliss Experience.docx"; Country = "Zanzibar" }
)

function Parse-DocumentLines {
    param(
        [string[]]$Lines,
        [string]$Country,
        [string]$FileName
    )

    $title = ""
    $subtitle = ""
    $price = ""
    $overview = ""
    $inclusions = @()
    $exclusions = @()
    $itinerary = @()
    $highlights = @()

    $state = "HEADER" # States: HEADER, OVERVIEW, INCLUSIONS, EXCLUSIONS, ITINERARY, HIGHLIGHTS

    $currentDay = $null

    # First, let's extract the title from the very first non-empty line
    $firstLine = ""
    foreach ($line in $Lines) {
        if ($line.Trim() -ne "") {
            $firstLine = $line.Trim()
            break
        }
    }

    # Clean first line
    # E.g. "RE: Desert Pulse Expedition | A tender Of..." or "RE: Chase the Migration Trail | ..."
    $cleanFirstLine = $firstLine -replace '^RE\s*:\s*', ''
    # Let's see if there is a |
    if ($cleanFirstLine -like "*|*") {
        $parts = $cleanFirstLine.Split("|")
        $title = $parts[0].Trim()
        $subAndPrice = $parts[1].Trim()
        
        # If there's a price in the line, extract it
        if ($subAndPrice -match "(\d[\d,]*\s*USD)") {
            $price = $Matches[1]
            $subtitle = ($subAndPrice -replace "(\b(?:FROM|PRICE|FROM PRICE|SHARE|SHARNG|SHARING)?\s*\d[\d,]*\s*USD\b.*)", "").Trim()
            # Clean trailing spaces/dashes
            $subtitle = $subtitle -replace '\s*-\s*$', ''
        } else {
            $subtitle = $subAndPrice
        }
    } else {
        $title = $cleanFirstLine
    }

    # Fallback to file name if title is empty or too long
    if ([string]::IsNullOrEmpty($title) -or $title.Length -gt 150) {
        $title = [System.IO.Path]::GetFileNameWithoutExtension($FileName)
    }

    # Search for price in the entire text if not found in first line
    if ([string]::IsNullOrEmpty($price)) {
        foreach ($line in $Lines) {
            if ($line -match "(\b\d[\d,]*\s*USD\b)") {
                $price = $Matches[1]
                break
            }
        }
    }
    # Clean price (e.g. 2,215 USD -> $2,215)
    if ($price -ne "") {
        # Format commas and prefix with "From $"
        $numPart = $price -replace '\s*USD', ''
        $price = "From $" + $numPart
    } else {
        $price = "Contact Us"
    }

    foreach ($line in $Lines) {
        $trimmed = $line.Trim()
        if ($trimmed -eq "") { continue }

        # Check state transitions
        if ($trimmed -match "^(?:TRIP\s+|SAFARI\s+)?OVERVIEW$" -or $trimmed -eq "INTRODUCTION" -or $trimmed -eq "TRIP OVERVIEW" -or $trimmed -eq "SAFARI OVERVIEW") {
            $state = "OVERVIEW"
            continue
        }
        elseif ($trimmed -match "^(?:PACKAGE\s+)?INCLUSIONS$" -or $trimmed -eq "PACKAGE INCLUDES" -or $trimmed -eq "INCLUSIONS") {
            $state = "INCLUSIONS"
            continue
        }
        elseif ($trimmed -match "^(?:PACKAGE\s+)?EXCLUSIONS$" -or $trimmed -eq "EXCLUSION" -or $trimmed -eq "EXCLUSIONS") {
            $state = "EXCLUSIONS"
            continue
        }
        elseif ($trimmed -match "^(?:DETAILED\s+|TRIP\s+)?ITINERARY$" -or $trimmed -eq "ITINERARY") {
            $state = "ITINERARY"
            continue
        }
        elseif ($trimmed -match "^(?:TRIP\s+)?HIGHLIGHTS$" -or $trimmed -eq "HIGHLIGHTS" -or $trimmed -eq "KEY HIGHLIGHTS") {
            $state = "HIGHLIGHTS"
            continue
        }
        # Fallback state change: if we encounter a Day header, auto transition to ITINERARY
        elseif ($trimmed -match "^Day\s+(\d+)\s*(?:-|:|\s)\s*(.*)") {
            $state = "ITINERARY"
            # Fall through to process the day
        }

        # Handle states
        if ($state -eq "OVERVIEW") {
            if ($overview -eq "") {
                $overview = $trimmed
            } else {
                $overview += "`n`n" + $trimmed
            }
        }
        elseif ($state -eq "INCLUSIONS") {
            $cleanItem = $trimmed -replace '^[-\*\u2022]\s*', ''
            $inclusions += $cleanItem
        }
        elseif ($state -eq "EXCLUSIONS") {
            $cleanItem = $trimmed -replace '^[-\*\u2022]\s*', ''
            $exclusions += $cleanItem
        }
        elseif ($state -eq "HIGHLIGHTS") {
            $cleanItem = $trimmed -replace '^[-\*\u2022]\s*', ''
            $highlights += $cleanItem
        }
        elseif ($state -eq "ITINERARY") {
            # Check if it's a new day
            if ($trimmed -match "^Day\s+(\d+)\s*(?:-|:|\s)\s*(.*)") {
                if ($currentDay -ne $null) {
                    $itinerary += $currentDay
                }
                $dayNum = "Day " + $Matches[1]
                $dayTitle = $Matches[2].Trim()
                $currentDay = @{
                    day = $dayNum
                    title = $dayTitle
                    description = ""
                }
            }
            else {
                # If we have a current day, append to description
                if ($currentDay -ne $null) {
                    if ($currentDay.description -eq "") {
                        $currentDay.description = $trimmed
                    } else {
                        $currentDay.description += "`n`n" + $trimmed
                    }
                }
            }
        }
    }

    # Add final day if any
    if ($currentDay -ne $null) {
        $itinerary += $currentDay
    }

    # Clean subtitle
    $subtitle = $subtitle.Trim()
    $subtitle = $subtitle -replace '^RE\s*:\s*', ''
    # If subtitle is empty, generate from days
    if ($subtitle -eq "") {
        $dayCount = $itinerary.Count
        if ($dayCount -gt 0) {
            $subtitle = "$($dayCount) Days / $($dayCount - 1) Nights Package"
        } else {
            $subtitle = "Premium Tour Package"
        }
    }

    # Clean title
    $title = $title -replace '^\s*-\s*', ''

    # Generate slug
    $slug = $title.ToLower() -replace '[^a-z0-9\s-]', '' -replace '\s+', '-' -replace '-+', '-'

    return @{
        title = $title
        slug = $slug
        subtitle = $subtitle
        price = $price
        overview = $overview
        inclusions = $inclusions
        exclusions = $exclusions
        itinerary = $itinerary
        highlights = $highlights
        country = $Country
    }
}

$parsedPackages = @()
$tempDirBase = Join-Path $PSScriptRoot "temp_extract"
if (Test-Path $tempDirBase) {
    Remove-Item $tempDirBase -Recurse -Force
}
New-Item -ItemType Directory -Path $tempDirBase -Force | Out-Null

$count = 0
foreach ($pf in $packageFiles) {
    $filePath = $pf.Path
    $country = $pf.Country
    $fileName = [System.IO.Path]::GetFileName($filePath)

    Write-Host "Parsing [$country]: $fileName..."

    if (-not (Test-Path $filePath)) {
        Write-Warning "File not found: $filePath"
        continue
    }

    # Copy and extract
    $tempZip = Join-Path $tempDirBase "temp_$count.zip"
    $extractDir = Join-Path $tempDirBase "extract_$count"
    New-Item -ItemType Directory -Path $extractDir -Force | Out-Null
    Copy-Item $filePath $tempZip -Force
    Expand-Archive -Path $tempZip -DestinationPath $extractDir -Force

    $lines = @()

    if ($fileName.EndsWith(".docx")) {
        $docXmlPath = Join-Path $extractDir "word/document.xml"
        if (Test-Path $docXmlPath) {
            $xmlText = Get-Content $docXmlPath -Encoding UTF8 -Raw
            # Replace breaks with text nodes containing newlines
            $xmlText = $xmlText -replace '<w:br\s*/?>', '<w:t xml:space="preserve">&#10;</w:t>'
            $xmlText = $xmlText -replace '<w:cr\s*/?>', '<w:t xml:space="preserve">&#10;</w:t>'
            [xml]$xml = $xmlText
            $ns = New-Object System.Xml.XmlNamespaceManager($xml.NameTable)
            $ns.AddNamespace("w", "http://schemas.openxmlformats.org/wordprocessingml/2006/main")
            $paragraphs = $xml.SelectNodes("//w:p", $ns)
            foreach ($p in $paragraphs) {
                $text = ""
                $runs = $p.SelectNodes(".//w:t", $ns)
                foreach ($r in $runs) {
                    $text += $r.InnerText
                }
                # Split Day headers that are glued to paragraphs
                $text = $text -replace '\b(Day\s+\d+\s*[-:])', ("`n" + '$1')
                $splitLines = $text.Split("`n")
                foreach ($sl in $splitLines) {
                    if ($sl.Trim() -ne "") {
                        $lines += $sl.Trim()
                    }
                }
            }
        }
    }
    elseif ($fileName.EndsWith(".odt")) {
        $contentXmlPath = Join-Path $extractDir "content.xml"
        if (Test-Path $contentXmlPath) {
            $xmlText = Get-Content $contentXmlPath -Encoding UTF8 -Raw
            $xmlText = $xmlText -replace '<text:line-break\s*/?>', '&#10;'
            [xml]$xml = $xmlText
            $ns = New-Object System.Xml.XmlNamespaceManager($xml.NameTable)
            $ns.AddNamespace("office", "urn:oasis:names:tc:opendocument:xmlns:office:1.0")
            $ns.AddNamespace("text", "urn:oasis:names:tc:opendocument:xmlns:text:1.0")
            $paragraphs = $xml.SelectNodes("//text:p", $ns)
            foreach ($p in $paragraphs) {
                $text = $p.InnerText
                # Split Day headers that are glued to paragraphs
                $text = $text -replace '\b(Day\s+\d+\s*[-:])', ("`n" + '$1')
                $splitLines = $text.Split("`n")
                foreach ($sl in $splitLines) {
                    if ($sl.Trim() -ne "") {
                        $lines += $sl.Trim()
                    }
                }
            }
        }
    }

    if ($lines.Count -gt 0) {
        $parsed = Parse-DocumentLines -Lines $lines -Country $country -FileName $fileName
        $parsedPackages += $parsed
        Write-Host "  Success! Title: '$($parsed.title)', Slug: '$($parsed.slug)', Days: $($parsed.itinerary.Count), Price: $($parsed.price)"
    } else {
        Write-Warning "Could not extract lines from $fileName"
    }

    $count++
}

# Cleanup
Remove-Item $tempDirBase -Recurse -Force

# Output to packages.json
$dataDir = Join-Path $PSScriptRoot "../data"
if (-not (Test-Path $dataDir)) {
    New-Item -ItemType Directory -Path $dataDir -Force | Out-Null
}
$outputPath = Join-Path $dataDir "packages.json"
$json = ConvertTo-Json $parsedPackages -Depth 10
[System.IO.File]::WriteAllText($outputPath, $json, [System.Text.Encoding]::UTF8)

Write-Host "Completed! Successfully parsed $($parsedPackages.Count) packages. Output written to $outputPath"

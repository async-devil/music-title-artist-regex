- title and artist are separeted by ' - ' addition information allowed // Example: John Coltrane - Giant Steps (2020 Remaster)
  - ^.* - .*$
  - ^.*(?= - )
  - (?<= - ).*$

- title and artist are separeted by ' - ' addition information disallowed // Example of addition information: (Official) [Full Album]
  - ^.* - .*$
  - ^.*(?= - )
  - (?<= - ).*?((?= \()|(?= \[))